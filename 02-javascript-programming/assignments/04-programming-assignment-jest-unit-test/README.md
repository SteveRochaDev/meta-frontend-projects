# Programming Assignment: Jest Unit Test

## Introduction
This assignment introduces unit testing in JavaScript using Jest. Unit tests allow developers to verify that individual parts of code work as expected, ensuring reliability and maintainability.

## Goal
The goal is to write a simple JavaScript function, export it as a module, and create a Jest unit test to verify its behavior.

## Objectives
- Install Jest as a development dependency.
- Configure the `test` script in `package.json`.
- Write and export a JavaScript function.
- Write a unit test using Jest's `test()` and `expect()` functions.
- Run the test to verify correctness.

## Project Structure
- `package.json`
- `timesTwo.js`
- `timesTwo.test.js`

## Instructions
1. Install Jest using `npm install jest --save-dev`.
2. Update `package.json` to include `"test": "jest"` in the scripts section.
3. Implement `timesTwo.js` to export a function that multiplies a number by 2.
4. Write `timesTwo.test.js` to verify that `timesTwo(10)` returns `20`.
5. Run the test using `npm test` to ensure it passes.

## Key Takeaways
- Unit tests validate isolated parts of a codebase.
- Jest provides a simple and powerful API for writing tests.
- Proper module exports and imports are essential for testing.
- Automated testing ensures code reliability and maintainability.

## Status
Assignment completed successfully.  
**Grade:** 100%
