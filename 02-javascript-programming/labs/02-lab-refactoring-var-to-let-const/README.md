# Lab: Refactoring var to let and const

## Introduction
This lab focuses on modernizing JavaScript code by replacing `var` declarations with `let` and `const`. This improves code safety, readability, and scoping behavior.

## Goal
The goal of this lab is to understand and apply best practices for variable declarations in JavaScript, fixing common issues like hoisting, redeclaration, and scoping errors.

## Objectives
- Understand the differences between `var`, `let`, and `const`.
- Replace `var` with `let` or `const` appropriately.
- Resolve hoisting and redeclaration issues.
- Use block-scoped variables to prevent unintended leaks.
- Test the updated code to ensure correct behavior.

## Project Structure
- `var_to_let_const.js`

## Instructions
1. Open `var_to_let_const.js` in the PROJECT folder.
2. Refactor all `var` declarations:
   - Use `const` for values that do not change.
   - Use `let` for variables that can change but are not redeclared.
3. Fix hoisting issues by declaring variables before they are used.
4. Handle block-scoped variables to prevent unintended access outside blocks.
5. Test the program using `console.log` to verify expected outputs.

## Key Takeaways
- `var` is function-scoped and allows redeclaration, which can lead to bugs.
- `let` and `const` are block-scoped; `const` prevents reassignment.
- Hoisting behaves differently: `var` is initialized as `undefined`, `let` and `const` are not accessible before declaration.
- Prefer `const` by default and use `let` only when reassignment is necessary.
- Modern JavaScript code is safer, cleaner, and easier to debug with `let` and `const`.

## Status
Lab completed successfully.  
**Grade:** 100%
