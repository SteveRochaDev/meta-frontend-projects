# Programming Assignment: Creating and Styling a Webpage

## Introduction
This lab focuses on creating a personal webpage using HTML and CSS. You will structure the page with headings, lists, an image, and a hyperlink, and then style it using CSS rules to enhance its appearance.

## Goal
The goal of this assignment is to gain practical experience using HTML to structure content and CSS to style it. By completing this lab, you will create a webpage that displays your personal information, favorite music artists, and films, and includes a link to your profile.

## Objectives
- Use HTML to structure a webpage with images, lists, headings, and links.
- Apply CSS rules to style content and improve visual presentation.
- Understand the use of IDs, element selectors, and spacing with margins.

## Project Structure
- `index.html`
- `photo.jpg`
- `styles.css`

## Instructions

### Part 1: Creating the HTML Document
1. Open `index.html` in the SRC folder.
2. Add the HTML5 `<!DOCTYPE html>` declaration.
3. Create the root `<html>` element and include `<head>` and `<body>`.
4. Inside the `<head>`, add a `<title>` element with your name and link to `styles.css`.
5. Inside the `<body>`, create five `<div>` elements:
   - First `<div>`: Add `<h1>` with your name.
   - Second `<div>`: Add an `<img>` with `id="photo"` displaying `photo.jpg`.
   - Third `<div>`: Add `<h2>` "Favorite Music Artists" and an unordered list `<ul>` with five favorite artists.
   - Fourth `<div>`: Add `<h2>` "Favorite Films" and an ordered list `<ol>` with five favorite films.
   - Fifth `<div>`: Add an `<a>` tag linking to your Meta profile, with the text "My Profile".

### Part 2: Styling the Webpage Using CSS
1. Open `styles.css` in the SRC folder.
2. Apply the following styles:
   - `#photo`: `border: 2px solid blue;`
   - `h1`: `color: blue;`
   - `h2`: `color: grey;`
   - `div`: `margin: 4px;`

### Part 3: Viewing the Webpage
1. Start the live server in VS Code (**Go Live** button).
2. Open the browser preview or navigate to `http://localhost:<port-number>`.
3. Verify the webpage displays your content and applied styles.
4. Stop the server when finished.

## Key Takeaways
- HTML structures content, while CSS styles it.
- Using `<div>` elements helps organize page sections.
- Linking a CSS file enables centralized and reusable styling.
- IDs and element selectors allow targeted styling.
- Margins and borders control spacing and visual emphasis.

## Status
Lab completed successfully.  
**Grade:** 100%
