/**
 * Assignment 4: Loop Control Structures
 *
 * Task: Write a for loop to print a multiplication table up to 5.
 * Use a while loop with a break statement to find the first number
 * greater than 10 that is divisible by 6, and a do...while loop
 * that skips numbers using continue.
 */

// ---- for loop: multiplication table of 5 ----
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log();

// ---- while loop + break: first number > 10 divisible by 6 ----
console.log("-- First number > 10 divisible by 6 --");
let candidate = 11;
let found;
while (true) {
  if (candidate > 10 && candidate % 6 === 0) {
    found = candidate;
    break; // exit as soon as the first match is found
  }
  candidate++;
}
console.log(`Found: ${found}`);

console.log();

// ---- do...while loop + continue: skip even numbers ----
console.log("-- Odd numbers from 1 to 9 (do...while + continue) --");
let n = 1;
do {
  if (n % 2 === 0) {
    n++;
    continue; // skip the rest of the body for even numbers
  }
  console.log(n);
  n++;
} while (n <= 9);
