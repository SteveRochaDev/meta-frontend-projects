# Programming Assignment: Array and Object Iteration

## Introduction
This assignment focuses on iterating over arrays and objects in JavaScript. It explores the use of `for...of` loops for arrays and object properties, as well as `for...in` loops for iterating through both own and inherited properties.

## Goal
The goal of this assignment is to build a solid understanding of different iteration techniques in JavaScript and how inheritance affects property visibility during iteration.

## Objectives
- Use the `for...of` loop to iterate over arrays.
- Iterate over an object’s own properties only.
- Use the `for...in` loop to include inherited prototype properties.
- Understand how JavaScript inheritance affects iteration.
- Write modular and reusable iteration functions.

## Project Structure
- `solution.js`

## Tasks Overview

### Task 1: Iterate Over an Array
- Create a `dairy` array containing dairy product names.
- Use a `for...of` loop to log each item to the console.

### Task 2: Iterate Over an Object’s Own Properties
- Create an `animal` object and a `bird` object that inherits from it.
- Use `Object.keys()` with a `for...of` loop to log only the bird’s own properties.

### Task 3: Iterate Over an Object and Its Prototype Properties
- Use a `for...in` loop to log all properties of the bird object, including inherited ones.

## Key Takeaways
- The `for...of` loop is ideal for iterating over arrays and iterable collections.
- Using `Object.keys()` restricts iteration to an object’s own properties.
- The `for...in` loop iterates over both own and inherited properties.
- Understanding prototype inheritance is essential when iterating over objects.
- Encapsulating logic in functions improves readability and reuse.

## Status
Assignment completed successfully.  
**Grade:** 100%
