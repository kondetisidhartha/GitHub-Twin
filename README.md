## About this project

This project is to create a github profile page clone to display the repositories and allow the user to filter through the repositories by name using a search bar.

> Followed MVC Structure through full project.

> Used CSS Modules, which makes easy to call css classes and ids without any clash of css classes and ids across project.

> Using custom react hooks (usehttp) for API Calls

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the project

In the project directory, you can run:

### 1. `npm install`

Installs all necessary packages for the project in the `pwd` under node_modules.

### 2. `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

## Instructions to run:

1. Default "github username" is "kondetisidhartha"
2. Type username in user search input field:
   > If username exists(eg. vanguard90) -> profile and repo changes
   > If username doesn't exists(eg. gibberi$h) -> profile and repo doesn't change
3. Clicking on any repo redirects to github repo link
4. Email/Twitter/Company are empty, because its value is `null` in response API calls

## Deployment

1. Used `npm run build` to build optimized output
2. Used **Netlify** for deployment
3. Open [https://github-twin.netlify.app](https://github-twin.netlify.app) to view demo

## Future improvements

I have created a basic layout and functionality. Project can be expanded to include:

1. Responsive design format
2. Caching API calls response, incase of network failure and minimising more API calls

## Feedback about exercise

I feel this challenge is very good for Intern/ Working Student position. It has all necessary challenges like API calls, react hooks, passing props, custom hooks, reading json data.
