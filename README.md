# react-menu

React-based food menu, following TDD practices

## Setup

- `git clone` the repo to download the project files.

- In the terminal run: `npm install` to install all the dependencies for the project.

- Run `npm run start` to get the app started.

- Head to http://localhost:3000/ in the browser to see it.

## Testing

Run `npm run test` to run the test suites.

Over the course of around 2 hours I followed strict TDD practices: writing the tests first, running them for red (failing test), writing minimal code for green (passing test) and refactoring. This included using Enzyme for snapshots. I ensured the styled components were given display names to allow the tests to recognise them and gave the components tested the correct props. All the tests are passing.

## My approach

You can see my approach clearly by looking at my commits in this repo. I started out by setting up a simple create-react-app project as I wanted to jump into development quickly. Following the TDD approach I created a tests folder and began building my first tests for the App and then the Menu components. Planning out the structure of the components I decided the Menu would be made up of components for each course type (starter, main, dessert). Each of these would be made up of individual Dish components to keep the project modular and maintain DRY code.

## Due to time constraints

If I had more time to work on this project I would continue my test-driven approach. Building out the features of the menu I would add click handlers to the dishes so they could be selected multiple times (for each person). Then continue to build out other features such as constraints on what each person can choose and giving a total price for the order as a whole. As the styling is simple I would like to improve the styling and ensure the app is mobile optimized for various device breakpoints.
