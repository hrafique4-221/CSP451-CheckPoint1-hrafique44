// dbDemo.js - demo script to exercise db.js
const crypto = require("crypto");
const db = require("./db");

// Simple password hash helper
function hash(pwd) {
  return crypto.createHash("sha256").update(String(pwd)).digest("hex");
}

// Insert some users
const u1 = db.insertUser("demo@example.com", hash("password123"));
const u2 = db.insertUser("admin@example.com", hash("adminadmin"));
const u3 = db.insertUser("demo@example.com", hash("duplicate")); // should be null

console.log("Inserted demo:", u1);
console.log("Inserted admin:", u2);
console.log("Duplicate insert result (should be null):", u3);

// Lookups
console.log("Find demo@example.com:", db.findUserByEmail("demo@example.com"));
console.log("Find nope@example.com:", db.findUserByEmail("nope@example.com"));

// List all
console.log("All users:", db.allUsers());
