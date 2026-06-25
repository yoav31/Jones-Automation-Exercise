# Jones Automation - Home Exercise 

Welcome to the Jones Automation home exercise project. 
This project demonstrates an End-to-End (E2E) web UI automation flow using Node.js and the Playwright framework.

## Author
**Yoav Vaknin**

## Technologies Used
* **Node.js** (Runtime environment)
* **Playwright** (Automation framework - JavaScript API)

## Features
* Navigates to the target website (`https://test.netlify.app/`).
* Accurately identifies and auto-fills the form fields: Name, Email, Phone, Company, and Website.
* **Bonus implementation:** Selects the value "51-500" from the Employees dropdown list.
* Captures a **screenshot** (`before_submit.png`) documenting the filled form right before submission.
* Handles the asynchronous submission process and validates the user's successful navigation to the "Thank You" page.

## Prerequisites
Before running the project, ensure that [Node.js](https://nodejs.org/) is installed on your local machine.

## Installation & Setup
To initialize the project and download all required dependencies, open your terminal in the project directory and run the following commands in order:
1. **clone this repo:**
   ```bash
    git clone https://github.com/yoav31/Jones-Automation-Exercise.git
   ```

2. **Install Playwright library:**
   ```bash
    npm install playwright
    npx playwright install chromium
   ```

3. **run command:**
   ```bash
    npm start
   ```   
