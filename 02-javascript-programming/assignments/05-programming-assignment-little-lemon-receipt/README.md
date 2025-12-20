# Programming Assignment: Little Lemon Receipt Maker

## Introduction
This assignment focuses on creating a dynamic receipt maker for a restaurant scenario. It demonstrates working with arrays of objects, loops, conditionals, and defensive coding in JavaScript.

## Goal
The goal is to implement two functions, `getPrices()` and `getDiscount()`, that calculate dish prices with or without tax and apply discounts based on the number of guests.

## Objectives
- Loop through arrays of objects to calculate and display prices.
- Use conditionals to handle tax application and discounts.
- Apply defensive coding to validate input parameters.
- Practice using functions with multiple parameters and dynamic behavior.

## Project Structure
- `finalProject.js`

## Instructions
1. Implement `getPrices(taxBoolean)` to log each dish's name and final price:
   - Multiply price by tax if `taxBoolean` is true.
   - Use original price if `taxBoolean` is false.
   - Handle invalid `taxBoolean` values gracefully.
2. Implement `getDiscount(taxBoolean, guests)`:
   - Call `getPrices(taxBoolean)` first.
   - Validate `guests` parameter (number between 0 and 30).
   - Apply discount: 5 for guests < 5, 10 for guests ≥ 5.
   - Handle invalid `guests` values gracefully.
3. Test your functions with different combinations of `taxBoolean` and `guests`.

## Key Takeaways
- Arrays of objects provide structured ways to represent data.
- Loops combined with conditionals allow dynamic processing of data.
- Defensive coding ensures functions handle invalid inputs safely.
- Functions can encapsulate logic for reusability and clarity.
- Proper console logging improves readability and debugging.

## Status
Assignment completed successfully.  
**Grade:** 100%
