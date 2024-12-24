# Playwright Login Test Automation

This project contains automated tests for verifying the login functionality of a web application using Playwright.

## Project Structure

- **Login.spec.js**: Main test script to validate login functionality with valid and invalid credentials.
- **login.js**: Page Object Model (POM) to interact with the login page and perform actions such as login, logout, and verify success or failure.
- **cred/creds.json**: Configuration file containing valid and invalid login credentials along with the application URL.

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **Playwright** package installed in your project