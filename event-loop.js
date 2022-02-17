const fs = require("fs");
const crypto = require("crypto");

// Executed 2nd (Timers)
setTimeout(() => console.log("Timer 1 finished"), 0);

// Executed 3rd (setimmediate)
setImmediate(() => console.log("The immediate finished"));

// Execvuted 4th (I/O Polling)
fs.readFile("test-file.txt", () => {
  console.log("I/O completed");
  console.log("--------------");

  const start = Date.now();

  // Executed 7th and 8th (Timers)
  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);

  // Executed 6th (setimmediate) because of pausing inside the function during I/O polling and then calls the setImmediate function
  setImmediate(() => console.log("The immediate 2 finished"));

  // Executed 5th because it is processed right after the I/O polling before the rest of the callback function
  process.nextTick(() => console.log("Process.nextTick"));

  //   Encryption passed to thread pool where each password is encrypted independtly
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password incrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password incrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password incrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password incrypted");
  });
});

// Executed 1st (top level)
console.log("Hello fro the top level code");
