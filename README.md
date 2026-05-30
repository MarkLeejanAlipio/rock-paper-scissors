# First JavaScript Exercise - Rock Paper Scissor

A simple Rock, Paper, and Scissor game

# Preview 
![Project Image](/image.png)

# Live
[Live Page](https://markleejanalipio.github.io/rock-paper-scissors/)

# What I've Used to complete the exercise

- Arrow functions and function declaration 
- For loop event
- Math.random() method

# Edited

Refactored everything since I want to make it better and make the UI look good since if you see my past UI, it sucks ;0
- Added UI and Reset Button
- Change choices from string to emoji (🪨, 📃, ✂️)
- DOM Manipulation - events, adding and hiding elements

# Pseudocode

1. SELECT the score, result, choice button, and reset button elements
2. CREATE a function that randomly returns ROCK, PAPER, or SCISSOR
3. DECLARE two variables to keep track of scores and set them to 0
4. CREATE a function that takes human and computer choice as arguments and plays a single round
    - INCREMENT the human score if the human wins
    - INCREMENT the computer score if the computer wins
    - KEEP the scores the same if it is a tie
5. ADD click events to the choice buttons
    - GET the human choice from the clicked button
    - GENERATE the computer choice
    - PLAY one round
    - UPDATE the score and result display
6. CHECK if either player reaches 5 points
    - DISABLE the choice buttons
    - SHOW the final winner
7. CREATE a reset function
    - RESET the scores and UI
    - ENABLE the choice buttons
