#!/usr/bin/env zx


// The zx provides require() function, so it can be used with imports in .mjs files (when using zx executable).
// declare required dependency

// load common.js module dependency. third-party module come from npm (nanoid)/ node.js built-in modules
const fs = require('fs');
const os = require('os');
const path = require('path');
const { nanoid } = require("nanoid");


let tmpDir;
const appPrefix = 'my-app';
try {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), appPrefix));
  // the rest of your app goes here
}
catch {
  // handle error
}
finally {
  try {
    if (tmpDir) {
      fs.rmSync(tmpDir, { recursive: true });
    }
  }
  catch (e) {
    console.error(`An error has occurred while removing the temp folder at ${tmpDir}. Please remove it manually. Error: ${e}`);
  }
}


void async function () {
  await $`pwd`
}() 
  .catch(console.error)



function buildName(firstName, lastName) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

console.log(chalk.yellowBright`If file has no extension, zx assumes it's ESM.`)

try {
let result1 = buildName("Bob"); // works correctly now
let result2 = buildName("Bob", "Adams", "Sr."); 
// error, too many parameters  Expected 1-2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right  
console.log(chalk.greenBright`${result1}`)
console.log(chalk.blue.bold.underline`${result1}`)
console.log(result3)
} catch (error) {
  console.log(error)
}

// require common,js packages    , *** nested required ***

  // It will generate and return an ID with 21 characters
 const id = nanoid();    

//  交叉使用 between commonjs module and require module
console.log(`${chalk.green("nano id:")}  ${chalk.red(id)}`);