# Markdown Scripts

It's possible to write scripts using markdown. Only code blocks will be executed
by zx. Try to run `zx examples/index.md`.


```js
await $`whoami`
await $`ls -la ${__dirname}`
await $`ls -lt |  head -n 2 | tail +2  | awk '{ print $NF }' `
let target=await $`ls -lt |  sed -n '2p' | awk '{ print $NF }' `
await $`cat ${target}`
```

The `__filename` will be pointed to **index.md**:

```js
console.log(chalk.yellowBright(__filename))
```

We can use import ES Module here as well:

```js
// load another mjs && execute
await import(`${__dirname}/basics.mjs`)
```
We can use import and require together:
  use import ESM  module via import('module-name') , the module file extension name must be .mjs
We can use import node.js  module via require('module-name')

```js
// We can use import and require together:
let {hello} = await import(`${__dirname}/say.mjs`);
console.log(hello("John"))
console.log(hello("Sarah"))
require('find-me')
```
we can run javascript control structure
```js
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

```