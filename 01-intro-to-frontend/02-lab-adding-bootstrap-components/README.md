# Lab: Adding Bootstrap Components to Enhance the Little Lemon Webpage

## Introduction
In this lab, you will enhance the Little Lemon webpage by adding Bootstrap components. You will practice using alerts, badges, and buttons to improve functionality and appearance while maintaining a responsive layout.

## Goal
The goal of this lab is to gain hands-on experience using Bootstrap components to create a visually appealing, user-friendly webpage. By completing this lab, you will enhance the Little Lemon menu with interactive elements and learn how to integrate components into the Bootstrap Grid system.

## Objectives
- Add a Badge to highlight the new "Falafel" dish.
- Insert an Alert to notify customers about the restaurant's closure.
- Add a Button for customers to place online orders.
- Maintain responsiveness using the Bootstrap Grid system.

## Project Structure
- `index.html`
- `logo.png`
- `bootstrap.min.css`
- `bootstrap.bundle.min.js`

## Instructions

### Part 1: Adding Bootstrap Components
1. Open the `index.html` file in the PROJECT folder.
2. Add an **Alert Component** under the "Our Menu" heading:
   ```html
    <div class="alert alert-info" role="alert">
        Our restaurant will be closed on New Year's Day
    </div>
3. Add a Badge Component to highlight the new Falafel dish:
    <h2>Falafel <span class="badge bg-secondary">New</span></h2>
4. Add a Button Component for online orders:
    <div class="row">
        <div class="col-12">
            <div class="text-center">
                <button type="button" class="btn btn-primary">Order Online</button>
            </div>
        </div>
    </div>
5. Save the file.

## Part 2: Viewing Your Webpage

1. Start the live server in VS Code (**Go Live** button).  
2. Open the browser preview or navigate to `http://localhost:<port-number>`.  
3. Verify that:
   - The alert is visible.  
   - The "New" badge is displayed next to Falafel.  
   - The "Order Online" button is visible.  
4. Stop the server after checking the webpage.

## Key Takeaways
- Bootstrap components like alerts, badges, and buttons enhance functionality and user experience.  
- The Bootstrap Grid system ensures responsive layouts.  
- Utility classes like `text-center` and `img-fluid` help center content and make images responsive.  

## Status
Lab completed successfully.  
**Grade:** 100%
