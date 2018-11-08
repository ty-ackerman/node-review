console.log("Starting Project");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

const _ = require("lodash");

// console.log(notes.helloWorld());
// console.log(notes.goodbye());
// const userInfo = os.userInfo();

// fs.appendFile("greetings.txt", `Hello ${userInfo.username}!\n`, err => err);

console.log(_.isString(17));
