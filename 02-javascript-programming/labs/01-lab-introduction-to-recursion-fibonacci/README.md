# Lab: Introduction to Recursion with Fibonacci Sequence

## Introduction
Recursion is a fundamental concept in computer science where a function calls itself to solve a problem. It is especially useful for problems that can be divided into smaller, similar sub-problems. One classic example of recursion is the Fibonacci sequence.

In this lab, you will implement a recursive solution to calculate Fibonacci numbers and explore the concepts of base cases and recursive cases.

## Goal
The goal of this lab is to understand and implement a recursive function that calculates the n-th Fibonacci number using well-defined base and recursive cases.

## Objectives
- Understand the Fibonacci sequence and its recursive definition.
- Learn the difference between base cases and recursive cases.
- Implement a recursive function to compute Fibonacci numbers.
- Analyse and discuss the efficiency of a recursive solution.

## Project Structure
- `recursive_fibonacci.js`

## Instructions

### Part 1: Understanding the Problem
1. Open the `recursive_fibonacci.js` file located in the PROJECT folder.
2. Review the comments provided in the file explaining:
   - What the Fibonacci sequence is.
   - What recursion means.
   - The role of base cases and recursive cases.

### Part 2: Writing the Recursive Function
1. Identify the base cases:
   - `fib(0) = 0`
   - `fib(1) = 1`
2. Define the recursive case using the formula:
   - `fib(n) = fib(n - 1) + fib(n - 2)`
3. Complete the `fib(n)` function by implementing:
   - Base cases that stop the recursion.
   - A recursive call that reduces the problem size.
4. Add test cases to verify the function works correctly:
   - Test values such as `fib(5)` and `fib(10)`.

### Part 3: Save and Execute
1. Save the changes in `recursive_fibonacci.js`.
2. Run the program using the play button in VS Code.
3. Verify that the output matches the expected Fibonacci values.

## Key Takeaways
- Recursion solves problems by breaking them into smaller sub-problems.
- Base cases are essential to prevent infinite recursion.
- Recursive cases define how the function progresses toward the base case.
- While simple and elegant, recursive Fibonacci solutions are not the most efficient for large inputs.

## Status
Lab completed successfully.  
**Grade:** 100%
