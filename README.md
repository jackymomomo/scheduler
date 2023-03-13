# Interview Scheduler

## Project discription 
Interview Scheduler is an online tool for managing interviews that has been designed using modern techniques and technologies to provide a seamless user experience. This is achieved through the use of a Single Page Application (SPA) architecture, which eliminates the need for multiple page refreshes and reduces loading times.

The application has been built using React, which is a popular JavaScript library for building user interfaces. React's built-in and custom hooks are used to add, edit, and delete interview appointments in real-time. The data is stored in a PostgreSQL database, which is accessed through an API server. Communication between the client application and the server is done using HTTP, with JSON being used as the data exchange format.

To ensure the quality of the project, Test Driven Development (TDD) practices have been implemented. This involves testing individual components in isolation and performing End-to-End testing. These practices help to ensure that the application is reliable and functions as expected.

## project features 

- Appointment days (Monday to Friday) are displayed and color-coordinated based on availability.
-  The days show the number of slots available as a snapshot of the week.
- Users can switch between days and view detailed information.
- Booked and available slots are clearly differentiated.
- Users can book interviews by typing in a student name and selecting an interviewer from a list.
- Users can modify existing interviews by pressing the edit icon.
- Users can cancel existing interviews, and a pop-up message will confirm the action before permanently deleting the interview.
- Days display currently remaining spots and capture updates after each modification.

## Screen Shots

![Screen Shot 2023-03-13 at 3 51 34 AM](https://user-images.githubusercontent.com/58836015/224681168-ed4e7903-a3b9-4342-9bc5-bbaad2753f65.png)

By selecting a weekday on the left panel, a user can see booked appointments and available slots for each day.

![Screen Shot 2023-03-13 at 3 49 09 AM](https://user-images.githubusercontent.com/58836015/224681258-aca0c1d1-a2c2-4734-bf19-36c8895170d7.png)

A user can add interviews to available slots by typing a student name and adding interviewer from the list (an error message will be shown if a student name field is left blank).

![Screen Shot 2023-03-13 at 3 49 50 AM](https://user-images.githubusercontent.com/58836015/224681487-34fdb68a-4635-4adc-a1b1-d0d455e3b453.png)

A user can cancel or edit an existing appointment by pressing the delete icon or notepad icon and interacting with a warning message by pressing a confirm button.
## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

#Api Server Setup
For full functionality both must run concurrently: the client and the API server applications.

> Start by forking and cloning the scheduler-api server here
> Follow the steps outlined in README to install and setup the database
> Fork and clone this repo
> Navigate to the root directory and install dependencies with npm install
> Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project npm start 

# Project Stack 

Front-End: React, Axios, JSX, HTML, SASS, JavaScript

Back-End: Express, Node.js, PostgreSQL

Testing: Storybook, Webpack Dev Server, Jest, Testing Library and Cypress

# Dependencies

> Axios
> Classnames
> Normalize.css
> React
> React-dom
> React-scripts
> Babel/core
> Storybook/addon-actions
> Storybook/addon-backgrounds
> Storybook/addon-links
> Storybook/addons
> Storybook/react
> Testing-library/jest-dom
> Testing-library/react
> Testing-library/react-hooks
> Babel-loader
> Node-sass
> Prop-types
> React-test-renderer
