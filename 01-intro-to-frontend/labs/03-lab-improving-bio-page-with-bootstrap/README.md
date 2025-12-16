# Lab: Improving Your Bio Page with Bootstrap

## Introduction
This lab focuses on enhancing a personal biographical webpage using Bootstrap. You will create a responsive two-column layout, add images, lists, headings, and a button styled with Bootstrap.

## Goal
The goal of this lab is to practice responsive web design using Bootstrap’s grid system and utility classes, while improving the visual presentation of a personal webpage.

## Objectives
- Implement a Bootstrap grid system for responsive design.
- Create a layout that adapts to mobile and desktop screens.
- Use Bootstrap components and utility classes to style content.
- Add a Bootstrap-styled button linking to an external profile.

## Project Structure
- `index.html`
- `photo.jpg`
- `bootstrap.min.css`
- `bootstrap.bundle.min.js`
- `logo.png`

## Instructions

### Part 1: Improving Your Bio Page
1. Open `index.html` in the PROJECT folder.
2. Add a `<div class="container">` inside the `<body>`.
3. Add a `<div class="row">` inside the container.
4. Create two columns inside the row:
   - `<div id="bio" class="col-12 col-lg-6 text-center">`
     - Add `<h1>` with your name.
     - Add `<img src="photo.jpg" class="img-fluid">`
   - `<div id="more" class="col-12 col-lg-6">`
     - Add `<h2>` "Favorite Music Artists" with an unordered list of five artists.
     - Add `<h2>` "Favorite Films" with an ordered list of five films.
     - Add a Bootstrap button linking to your Meta profile:  
       `<a href="https://www.meta.com/user/123" class="btn btn-primary">My Meta Profile</a>`
5. Save the file.

### Part 2: Viewing Your Webpage
1. Start the live server (**Go Live** button in VS Code).
2. Open the browser preview or navigate to `http://localhost:<port-number>`.
3. Verify the webpage displays:
   - Two responsive columns for bio and additional details.
   - The profile image is responsive.
   - The Bootstrap-styled button works.
4. Stop the server when done.

## Key Takeaways
- Bootstrap's grid system simplifies responsive web design.
- Utility classes like `text-center` and `img-fluid` enable quick styling.
- Bootstrap components, such as buttons, enhance interactivity and appearance.

## Status
Lab completed successfully.  
**Grade:** 100%
