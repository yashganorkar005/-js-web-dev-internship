/**
 * ============================================================================
 * CAPSTONE MINI PROJECT
 * Interactive Product Inventory & Analytics Dashboard
 * ============================================================================
 *
 * A console-based application that combines every core JavaScript concept:
 *
 *   1. Data & Input Initialization  - prompt() collects a new product's
 *                                     name and price, converted explicitly.
 *   2. Control Flow & Conditionals  - if...else + switch validate input and
 *                                     assign category badges (Budget /
 *                                     Standard / Premium) by price tier.
 *   3. Loops & Flow Control         - loops with break/continue search the
 *                                     inventory and handle bad input.
 *   4. Functions & Scope            - regular functions and arrow functions
 *                                     compute totals with local scoping.
 *   5. Array Methods & Iteration    - forEach, filter and map produce the
 *                                     final reports.
 *
 * How to run:
 *   Browser: open in a <script> tag and answer the prompts.
 *   Node:    node capstone-inventory.js            (uses defaults)
 *            node capstone-inventory.js Monitor 150 (passes values directly)
 * ============================================================================
 */

"use strict";

/* ==========================================================================
 * 0. INPUT LAYER
 *    Uses prompt() when available (browser); falls back to CLI arguments
 *    so the same script runs headless in Node.js.
 * ========================================================================== */

function readInput(message, argIndex) {
  if (typeof prompt === "function") {
    return prompt(message);
  }
  return process.argv[argIndex];
}

console.log("--- Initializing Inventory System ---");

const newProductName = readInput("Enter a new product name:", 2);
const newProductPriceRaw = readInput("Enter its price:", 3);

// Explicit type conversion - Number() turns the string into a number
const newProductPrice = Number(newProductPriceRaw);

// Pre-existing inventory alongside which the new item is stored
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

console.log(`[Prompt executed: User adds "${newProductName}" at "$${newProductPrice}"]`);
console.log();

/* ==========================================================================
 * 1. CONTROL FLOW: input validation with if...else, category badge with switch
 * ========================================================================== */

// --- if...else validates the input, using break-free flow control ---
let inputIsValid = true;

if (!newProductName || newProductName.trim() === "") {
  console.log("Validation: product name is missing - skipping insert.");
  inputIsValid = false;
} else if (Number.isNaN(newProductPrice) || newProductPrice < 0) {
  console.log("Validation: price is not a valid positive number - skipping insert.");
  inputIsValid = false;
}

// --- Loop with break: search for a duplicate name before inserting ---
let duplicateFound = false;
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].name.toLowerCase() === String(newProductName).toLowerCase()) {
    duplicateFound = true;
    console.log(`Validation: "${newProductName}" already exists - skipping duplicate.`);
    break; // stop searching the moment a match is found
  }
}

// Insert only if every check passed
if (inputIsValid && !duplicateFound) {
  inventory.push({ name: String(newProductName), price: newProductPrice });
}

// --- Category badge: threshold logic in a function, switch on the tier ---
function assignCategory(price) {
  // Dynamic price thresholds decide the tier...
  let tier;
  if (price < 50) {
    tier = "budget";
  } else if (price < 200) {
    tier = "standard";
  } else {
    tier = "premium";
  }

  // ...and the switch maps the tier to its badge
  switch (tier) {
    case "budget":
      return "Budget";
    case "standard":
      return "Standard";
    case "premium":
      return "Premium";
    default:
      return "Uncategorized";
  }
}

/* ==========================================================================
 * 2. LOOPS & FLOW CONTROL: walk the roster, skipping bad entries
 * ========================================================================== */

console.log("--- Processing Inventory Roster (forEach) ---");

// forEach prints every product with its category badge
inventory.forEach((product) => {
  // continue-equivalent: skip entries with a missing/invalid price
  if (typeof product.price !== "number" || Number.isNaN(product.price)) {
    return; // in forEach, returning early acts like `continue`
  }
  console.log(`* Item: ${product.name} ($${product.price}) -> Category: ${assignCategory(product.price)}`);
});

console.log();

/* ==========================================================================
 * 3. FUNCTIONS & SCOPE: statistics with securely scoped locals
 * ========================================================================== */

// Regular function: total inventory value
function calculateTotalValue(items) {
  let total = 0; // local to this function - invisible outside
  for (let i = 0; i < items.length; i++) {
    total += items[i].price; // assignment operator accumulates the sum
  }
  return total;
}

// Arrow functions: tax & discount with default parameters
const applyTax = (amount, taxRate = 0.08) => amount * (1 + taxRate);
const applyDiscount = (amount, discountRate = 0.1) => amount * (1 - discountRate);

console.log("--- Financial Analytics ---");

const totalValue = calculateTotalValue(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

// Tax / discount are applied inside their own function scopes
const taxedValue = applyTax(totalValue);
const discountedValue = applyDiscount(totalValue);
console.log(`(Reference) With 8% tax: $${taxedValue.toFixed(2)} | With 10% discount: $${discountedValue.toFixed(2)}`);

/* ==========================================================================
 * 4. ARRAY METHODS: filter() and map() build the final reports
 * ========================================================================== */

// filter(): isolate items under a price threshold
const affordableThreshold = 200;
const affordableItems = inventory
  .filter((product) => product.price < affordableThreshold)
  .map((product) => product.name);

console.log(`Filtered Affordable Items (Under $${affordableThreshold}): ${JSON.stringify(affordableItems)}`);

// map(): transform every product into a formatted report line
const reportList = inventory.map(
  (product) => `${product.name.toUpperCase()}: $${product.price}`
);
console.log(`Formatted Report List: ${JSON.stringify(reportList)}`);

console.log();
console.log("--- Inventory System Complete ---");
