import express from "express"
import url from "url"
import path from "path"
import jwt from "jsonwebtoken"

import dotenv from "dotenv"
const __dirname = path.resolve()
dotenv.config({ path: path.join(__dirname, './.env') })


const router = express.Router()
const LOG = process.env.DEBUG === "true" ? console.log.bind(console) : function () { };
const LOGERR = console.log;


// Check Session Middleware
const checkSession = (req, res, next) => {
  if (!req.session || !req.session.auth0State) {
    return res.status(401).json({ error: 'Session expired or not authenticated' });
  }

  // Session exists, continue to the next middleware
  next();
};

router.get("/path/:sessionToken", async (req, res) => {
  LOG(process.env);
  LOG(req.params)
  const query = url.parse(req.url, true).query;
  console.log(query);
  const sessionToken = req.params.sessionToken
  req.session = {};
  req.session.auth0State = query.state

  // TO DO - make token expiry short!, consider adding a JTI for replay prevention
  try {

    const payload = jwt.verify(sessionToken, process.env.APP_SECRET, {
      ignoreExpiration: true,
      algorithms: ["HS256"],
    });

    req.session.auth0Payload = payload;
    console.log(req.session);
    return res.status(200).render("waiting", {
      waitTime: process.env.TESTING_WAIT_TIMES
    })


  }
  catch (e) {
    LOGERR(e)
    res.status(401).render("error", {
      message: "Invalid access!",
      url: process.env.OKTA_URL
    })
  }
})


router.post("/continue", checkSession, async (req, res) => {
  var extraData = "";
  try {
    extraData = JSON.parse((req.body || {}).jsonData || "");
  }
  catch (e) {
    console.log("exception parsing extraData as JSON", e)
  }

  try {

    const sessionToken = {
      ...req.session.auth0Payload,
      state: req.session.auth0State,
      ...extraData
    }

    console.log(sessionToken);
    const signed = jwt.sign(sessionToken, process.env.APP_SECRET)
    LOG(req.session.auth0Payload);
    const continueUrl = `${req.session.auth0Payload.iss}continue/reset-password?state=${req.session.auth0State}&session_token=${signed}`
    res.redirect(continueUrl)
  } catch (error) {
    // Handle token verification errors
    console.error(error);
    res.status(401).render("error", {
      message: "Invalid access!",
      error: error
    });
  }
});



export default router
