#!/usr/bin/env zx


// The zx provides require() function, so it can be used with imports in .mjs files (when using zx executable).



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

// require common,js packages    

const { nanoid } = require("nanoid");

  // It will generate and return an ID with 21 characters
 const id = nanoid();    

//  交叉使用 between commonjs module and require module
console.log(`${chalk.green("nano id:")}  ${chalk.red(id)}`);