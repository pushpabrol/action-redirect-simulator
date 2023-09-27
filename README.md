# Project README

This README provides instructions for running the Node.js project included in this repository. The project uses the Express.js framework to create a web application for routing to an app from auth0 actions.

Follow the steps below to set up and run the project successfully.

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
      SECURE_COOKIE=true
      SESSION_DURATION_MINUTES=30
      TESTING_WAIT_TIMES=240
      DEBUG=true
      COOKIE_SESSION_SECRET=
      APP_SECRET=<shared secret with auth0 for token signing and validaiton - HS256>
      PORT=3539
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

- `routes/waito.js`: This file contains the route logic for redirection etc.
- `views/`: This directory contains the Pug template files for rendering views.

## Troubleshooting

If you encounter any issues while setting up or running the project, please check the following:

- Ensure that Node.js is installed correctly, and you have npm (Node Package Manager) available.
- Verify that the environment variables in the `.env` file are correctly set.
- Check for any error messages in the console output. Make sure the DEBUG=true in the .env file 


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.