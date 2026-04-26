# First JavaScript Exercise - Rock Paper Scissor

A simple Rock, Paper, and Scissor game

# What I've Used to complete the exercise

- Arrow functions and function declaration 
- For loop event
- Math.random() method
# Edited 
- `querySelectorAll` and `forEach` for selecting and iterating over buttons
- `dataset` attributes for reading each button's choice
- `createElement` and `appendChild` for dynamically rendering round results
- Event listeners to handle player input and drive the game loop

# Revisiting
- Removed humanChoice - the player's choice is read directly from each button's `data-choice` attribute via `dataset.choice`
- Replaced the `for` loop and `prompt()` with event listeners — each button click plays one round, and the game ends after 5 rounds