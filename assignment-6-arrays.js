/**
 * Assignment 6: Arrays, Objects, and Core Methods
 *
 * Task: Create an array of product objects (with name and price
 * properties). Use forEach() to print each product, filter() to
 * find items under a certain price, and map() to create an array
 * of formatted name-price strings.
 */

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

// ---- forEach(): iterate and print every product ----
console.log("-- All Products (forEach) --");
products.forEach((product) => {
  console.log(`Item: ${product.name} - Price: $${product.price}`);
});

console.log();

// ---- filter(): items under $50 ----
const affordableProducts = products.filter((product) => product.price < 50);
console.log("-- Filtered Products (Price < $50) --");
console.log(affordableProducts);

console.log();

// ---- map(): transform to formatted "NAME costs $PRICE" strings ----
const productTags = products.map(
  (product) => `${product.name.toUpperCase()} costs $${product.price}`
);
console.log("-- Mapped Product Tags (map) --");
// Printed with quotes so the array reads like the expected output
console.log(`[ ${productTags.map((tag) => `"${tag}"`).join(", ")} ]`);
