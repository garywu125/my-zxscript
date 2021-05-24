#! /usr/bin/env zx
// $.verbose = false
// Passing array of values ????
let files = ["中文測試","タッチパネル","touch panel"]
// await $`tar cz ${files}`
await $`echo ${files}`

let day=null
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(`today is : ${day}`)

let numText = "";
let numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  if (value%2===0)
  numText = numText + value + "<br>";
}

console.log(numText)


let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + "<br>";
}

console.log(`cars are : ${text}`)
