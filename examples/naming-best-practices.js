// Naming Best Practices: Descriptive Variable and Function Names
//
// This file illustrates the difference between vague names and
// descriptive names for variables and functions.

// ─── VARIABLES ───────────────────────────────────────────────

// Bad: single-letter or cryptic names give no hint of purpose
const x = 3.14159;
const arr = ["Alice", "Bob", "Charlie"];
const n = arr.length;
const t = Date.now();

// Good: names clearly communicate what the value represents
const PI = 3.14159;
const contributorNames = ["Alice", "Bob", "Charlie"];
const contributorCount = contributorNames.length;
const sessionStartTimestamp = Date.now();

// ─── FUNCTIONS ───────────────────────────────────────────────

// Bad: what does "calc" calculate? what does "d" mean?
function calc(r) {
  return 2 * PI * r;
}

function proc(arr) {
  return arr.filter((i) => i.length > 3);
}

function chk(u) {
  return u !== null && u !== undefined && u.trim() !== "";
}

// Good: function and parameter names describe intent and domain
function calculateCircleCircumference(radius) {
  return 2 * PI * radius;
}

function filterLongNames(names) {
  return names.filter((name) => name.length > 3);
}

function isValidUsername(username) {
  return username !== null && username !== undefined && username.trim() !== "";
}

// ─── USAGE ───────────────────────────────────────────────────

const smallCircleRadius = 5;
const smallCircleCircumference = calculateCircleCircumference(smallCircleRadius);
console.log(`Circumference of circle with radius ${smallCircleRadius}: ${smallCircleCircumference.toFixed(2)}`);

const longContributorNames = filterLongNames(contributorNames);
console.log("Contributors with names longer than 3 characters:", longContributorNames);

const testUsername = "alice";
console.log(`Is "${testUsername}" a valid username?`, isValidUsername(testUsername));
