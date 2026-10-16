/**
 * Assignment 1: Variables, Data Types, and Console Operations
 *
 * Task: Declare variables using var, let, and const to store a user's name,
 * age, employment status, and a list of skills. Use typeof to check each
 * variable's type and log them to the console.
 */

// var -> function-scoped declaration (legacy style, still valid)
var userName = "Alice";

// let -> block-scoped, re-assignable declaration
let userAge = 25;

// const -> block-scoped, constant declaration
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

console.log(`Name: ${userName} (Type: ${typeof userName})`);
console.log(`Age: ${userAge} (Type: ${typeof userAge})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`);
