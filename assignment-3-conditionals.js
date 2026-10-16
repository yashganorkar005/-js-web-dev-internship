/**
 * Assignment 3: Conditional Logic Implementation
 *
 * Task: Evaluate a user's numerical test score using if...else,
 * determine a letter grade using a switch statement, and use a
 * ternary operator to print whether they passed or failed.
 *
 * NOTE: `prompt()` only exists in browsers. In Node.js, pass the
 * score as a CLI argument: `node assignment-3-conditionals.js 85`
 */

// ---- Input: prompt() in browsers, CLI arg in Node ----
function readScore() {
  if (typeof prompt === "function") {
    return prompt("Enter your test score:");
  }
  return process.argv[2];
}

const rawScore = readScore();
const score = Number(rawScore);

console.log(`Score: ${score}`);

// ---- if...else: validate / normalize the score band ----
let grade;
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else if (score >= 0) {
  grade = "F";
} else {
  grade = "Invalid";
}

// ---- switch statement: map the grade band to a letter ----
let letterGrade;
switch (grade) {
  case "A":
    letterGrade = "A";
    break;
  case "B":
    letterGrade = "B";
    break;
  case "C":
    letterGrade = "C";
    break;
  case "D":
    letterGrade = "D";
    break;
  case "F":
    letterGrade = "F";
    break;
  default:
    letterGrade = "N/A";
}

console.log(`Grade: ${letterGrade}`);

// ---- Ternary operator: pass/fail status ----
const status = score >= 60 ? "Passed" : "Failed";
console.log(`Status: ${status}`);
