/**
 * Assignment 2: Operators, Expressions, and Input Handling
 *
 * Task: Use prompt() to capture a user's bill amount and tip percentage.
 * Perform explicit type conversion (e.g., using Number()), compute the
 * total using arithmetic and assignment operators, and log a formatted
 * string.
 *
 * NOTE: `prompt()` only exists in browsers. When run in Node.js this
 * script falls back to CLI arguments (`node assignment-2-operators.js 100 15`)
 * so it can be executed from the terminal.
 */

// ---- Input acquisition (works in browser AND Node) ----
function readInput(message) {
  // Browser: use prompt() as the assignment requires
  if (typeof prompt === "function") {
    return prompt(message);
  }
  // Node fallback: process.argv (skips node + script path)
  return process.argv[readInput.index++];
}
readInput.index = 2;

// ---- Explicit type conversion with Number() ----
const billAmountInput = readInput("Enter the bill amount:");
const tipPercentInput = readInput("Enter the tip percentage:");

const subtotal = Number(billAmountInput);
const tipPercentage = Number(tipPercentInput);

// ---- Arithmetic + assignment operators ----
let calculatedTip = subtotal * (tipPercentage / 100);
calculatedTip = Math.round(calculatedTip); // keep it a clean dollar amount

let totalAmount = subtotal;
totalAmount += calculatedTip; // compound assignment operator

// ---- Formatted output ----
console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);
