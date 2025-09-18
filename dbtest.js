// dbTest.js - simple tests for db.js module
const crypto = require("crypto");
const db = require("./db");

// helper for hashing
function hash(pwd) {
  return crypto.createHash("sha256").update(String(pwd)).digest("hex");
}

// --- Test 1: Insert users ---
console.log("== Test 1: Insert users ==");
console.log(db.insertUser("user1@test.com", hash("one")));
console.log(db.insertUser("user2@test.com", hash("two")));

// --- Test 2: Prevent duplicates ---
console.log("\n== Test 2: Duplicate insert ==");
console.log("Duplicate (should be null):", db.insertUser("user1@test.com", hash("dup")));

// --- Test 3: Find users ---
console.log("\n== Test 3: Find users ==");
console.log("Find user1:", db.findUserByEmail("user1@test.com"));
console.log("Find missing:", db.findUserByEmail("missing@test.com"));

// --- Test 4: List all users ---
console.log("\n== Test 4: All users ==");
console.log(db.allUsers());
