/**
 * Assignment 5: Function Architecture and Scope
 *
 * Task: Define a standard function and an arrow function that accept
 * parameters (e.g., length and width) with default values to calculate
 * the area of a rectangle. Demonstrate function and block scope limits.
 */

// ---- Standard function declaration with default parameters ----
function calculateAreaStandard(length = 5, width = 4) {
  return length * width;
}

// ---- Arrow function with default parameters ----
const calculateAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${calculateAreaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${calculateAreaArrow(10, 3)}`);

// ---- Function scope: a var inside a function is NOT visible outside ----
function declareFunctionScoped() {
  var functionVar = "I live inside declareFunctionScoped";
}
declareFunctionScoped();

// ---- Block scope: a let inside a block is NOT visible outside ----
function demonstrateBlockScope() {
  if (true) {
    let blockVar = "I only exist in this if-block";
    const alsoBlockScoped = "Me too";
    console.log(`Inside block: blockVar = "${blockVar}"`);
  }
  // Accessing blockVar here would throw:
  //   ReferenceError: blockVar is not defined
  // We prove it safely with a try/catch so the script keeps running.
  try {
    console.log(blockVar); // eslint-disable-line no-undef
  } catch (error) {
    console.log(`Scope Test Error: ${error}`);
  }
}
demonstrateBlockScope();

// ---- Function scope proof (same idea with var) ----
try {
  console.log(functionVar); // eslint-disable-line no-undef
} catch (error) {
  console.log(`Scope Test Error: ${error}`);
}
