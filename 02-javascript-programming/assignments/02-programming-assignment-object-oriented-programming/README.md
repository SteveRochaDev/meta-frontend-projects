# Programming Assignment: Building an Object-Oriented Program

## Introduction
This assignment focuses on object-oriented programming (OOP) concepts in JavaScript. Learners create classes, extend them using inheritance, and instantiate objects with unique properties and methods.

## Goal
The goal of this assignment is to understand and implement OOP principles, including class creation, inheritance, method overriding, and object instantiation.

## Objectives
- Create classes with constructors and default parameters.
- Use inheritance to extend parent classes.
- Add and override methods in subclasses.
- Instantiate objects and assign unique properties.
- Apply OOP to organize and structure code effectively.

## Project Structure
- `ooprogramming.js`

## Tasks Overview

### Task 1: Code a Person Class
- Implement a `Person` class with:
  - Default parameters: `name = "Tom"`, `age = 20`, `energy = 100`
  - Methods:
    - `sleep()` → increases `energy` by 10
    - `doSomethingFun()` → decreases `energy` by 10

### Task 2: Code a Worker Class
- Implement a `Worker` class that extends `Person`
  - Additional parameters: `xp = 0`, `hourlyWage = 10`
  - Method:
    - `goToWork()` → increases `xp` by 10

### Task 3: Code an Intern Object
- Instantiate the `Worker` class for an intern:
  - `name: "Bob"`, `age: 21`, `energy: 110`, `xp: 0`, `hourlyWage: 10`
- Call `goToWork()` on the intern object
- Return the intern object

### Task 4: Code a Manager Object
- Instantiate the `Worker` class for a manager:
  - `name: "Alice"`, `age: 30`, `energy: 120`, `xp: 100`, `hourlyWage: 30`
- Call `doSomethingFun()` on the manager object
- Return the manager object

## Key Takeaways
- Classes define blueprints for objects with shared properties and methods.
- Inheritance allows subclasses to reuse and extend parent functionality.
- Methods encapsulate behavior within objects.
- Default constructor parameters provide flexibility during object instantiation.
- OOP promotes modular, reusable, and organized code.

## Status
Assignment completed successfully.  
**Grade:** 100%
