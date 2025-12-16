# Lab: Creating a Two-Column Food Menu Using Bootstrap

## Introduction
This lab focuses on building a responsive two-column food menu for Little Lemon using the Bootstrap Grid system. You will center the logo, create a menu title, and arrange menu items in a two-column layout that adapts to various screen sizes.

## Goal
The goal is to practice using Bootstrap's Grid system to create a visually appealing and responsive layout.

## Objectives
- Build a responsive webpage using Bootstrap.
- Use Bootstrap container, row, and column classes.
- Center-align images and text with utility classes.
- Create a two-column layout for menu items that adapts to mobile and desktop screens.

## Project Structure
- `index.html`
- `logo.png`
- `bootstrap.min.css`
- `bootstrap.bundle.min.js`

## Instructions

### Part 1: Creating the Layout
1. Open `index.html` in the project folder.
2. Create a `<div class="container">` inside the `<body>`.
3. Add three `<div class="row">` elements:
   - First row: Logo (`<img>` with `class="img-fluid"` inside `<div class="text-center">`)
   - Second row: Menu title (`<h1>` inside `<div class="text-center">`)
   - Third row: Two columns (`<div class="col-12 col-lg-6">`) for menu items.

4. Add menu items:
   - Left column: Falafel, Fried Calamari
   - Right column: Pasta Salad, Greek Salad

5. Save the file.

### Part 2: Viewing the Page
1. Start the live server in VS Code.
2. Open the browser preview or navigate to `http://localhost:<port-number>`.
3. Verify that the webpage displays the logo, title, and two-column menu.
4. Stop the server when finished.

## Key Takeaways
- Bootstrap Grid system enables responsive layouts.
- Utility classes like `text-center` center content easily.
- `img-fluid` makes images responsive.
- Classes like `col-12` and `col-lg-6` adjust layout for different screen sizes.

## Status
Lab completed successfully.  
**Grade:** 100%
