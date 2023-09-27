# Project README

This README provides instructions for running the Node.js project included in this repository. The project uses the Express.js framework to create a web application with session management and routing for an Onfido integration. Follow the steps below to set up and run the project successfully.

## Prerequisites

Before you can run this project, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your machine.
- Make sure npm is installed on your machine

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies:**

   Open a terminal in the project directory and run the following command to install the required Node.js packages:

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the project root directory and configure the necessary environment variables. You can use the `.env.example` file as a template. Make sure to replace the placeholders with the actual values:

   ```dotenv
    APP_SECRET=3o05of1SPWD1y3F14jHXjRYe8QpM0ResFZ6n8vY30S10om/whw9MmqWdONoj/BzFcIu7lTUKljrXUlx5UDHr3Q==
    ISSUER_BASE_URL=https://oidc-tests.auth0.com
    PORT=3539
    ONFIDO_API_TOKEN=api_sandbox_us.tkK6ChF8g1m.WUmri7OwsOV3uSmsXvum3gGqgisVsKLn
    ONFIDO_REGION=US
    ONFIDO_REFERRER_PATTERN=*://*/*
    WORKFLOW_ID=19ca1593-9482-41bb-b58f-e074689a986a
    COOKIE_SESSION_SECRET=b068215a5fdc0bb7eaa467c6a052adfa943ab382fbe9dd694dae1fe00fd0ef72
    SELF_AUD=onfido
    OKTA_URL=https://iamkrish.oktapreview.com
    DEBUG=true
    SECURE_COOKIE=false
    SESSION_DURATION_MINUTES=30
    IDV_CHECK_INTERVAL=15000
    IDV_CHECK_TIMES_RUN=18
   ```

4. **Run the Application:**

   Start the Node.js application by running the following command:

   ```bash
   npm start
   ```
   The application will start, and you should see a message in the console indicating that it's listening on the specified port (or the default port, 3000).

5. **Access the Application:**

   Open a web browser and navigate to [http://localhost:3000/redirect-rule](http://localhost:3000/redirect-rule) to access the application.

## Project Structure

The project structure includes the following key components:

- `routes/onfido.js`: This file contains the route logic for Onfido integration.
- `views/`: This directory contains the Pug template files for rendering views.
- `public/`: Static assets like CSS, JavaScript, and images should be placed in this directory.

## Troubleshooting

If you encounter any issues while setting up or running the project, please check the following:

- Ensure that Node.js is installed correctly, and you have npm (Node Package Manager) available.
- Verify that the environment variables in the `.env` file are correctly set.
- Check for any error messages in the console output. Make sure the DEBUG=true in the .env file 

## Contributing

If you would like to contribute to this project, please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them with clear commit messages.
4. Push your branch to your fork: `git push origin feature/your-feature-name`.
5. Open a pull request to the main repository's `main` branch.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---