# Unexpected Behavior with Undefined and Null in Arithmetic Operations

This repository demonstrates a common pitfall in JavaScript related to loose typing and arithmetic operations involving `undefined` and `null` values.

The `bug.js` file showcases the issue, where adding `undefined` results in `NaN` (Not a Number), while adding `null` is treated as adding 0.

The `bugSolution.js` file provides a solution using strict equality checks and optional default parameter values to handle these cases more gracefully.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g., Node.js, browser's console).
3. Observe the unexpected output.
4. Open `bugSolution.js` to see a more robust approach.

## Lesson Learned

Always be mindful of the potential for unexpected results when performing arithmetic operations on variables that might hold `undefined` or `null` values in JavaScript. Explicitly handle these cases using checks and default values for better code robustness.