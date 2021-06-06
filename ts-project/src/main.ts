#!/usr/bin/env zx
// !!!! import this is required
import 'zx'

// !!!! TS can't allow declare  import , using import(expression)
// import { area, circumference,sayHi,snakeCase } from "./circle2.mjs";  

await import(`${__dirname}/circle3.mjs`);

const { area:myArea, circumference,sayHi:myHi,snakeCase,hello } = await import(`${__dirname}/circle2.mjs`);  

['HelloWorld', 'left pad', 'ECMAScript'].forEach(text => {
  console.log(snakeCase(text));
});
console.log(hello("taiwan"))

class User {
  private name : string

  constructor(name : string) {
    this.name = name
  }

  greet() {
    console.log(` ${chalk.bold.underline.blue("Hello:")}, ${chalk.green(this.name)}!`)
  }
}

const eddy = new User("Eddy")
// eddy.name // Error: 'name' is private
eddy.greet()

// using zx built-in package
let name="obsolete"
console.log(chalk.black.bgCyanBright(name))

// top level await
await $`whoami`
await $`ls -la ${__dirname}`
await $`ls -lt |  head -n 2 | tail +2  | awk '{ print $NF }' `
let target=await $`ls -lt |  sed -n '2p' | awk '{ print $NF }' `
await $`echo ${target}`

  // mix ts  with commonjs module / ESM module
  // require .js file extension
  // import .mjs file extension

require(`${__dirname}/cjs.js`);

// import ESM module via import function : dynamic import ESM module * destructuring assignment : 



// const { area:myArea, circumference,sayHi:myHi } = await import(`${__dirname}/circle.mjs`);  


//???? await remote import mjs ?????
// const { area:myArea, circumference,sayHi:myHi } = await import('https://raw.githubusercontent.com/garywu125/my-zxscript/main/ts-project/src/circle.mjs')


const r = 3;

console.log(myHi('LogRocket'))

console.log(`Circle with radius ${r} has
  area: ${myArea(r)};
  circunference: ${circumference(r)}`);

console.log("finally")


  
  
//   require(`${__dirname}/cjs.js`);

//   // import local module (include remote)
//   let { hello } = await import(`${__dirname}/esm.mjs`);
//   // console.log(hello("John"));
//   // console.log(hello("Sarah"));  

//   await  $`printf ${hello("john")}`
//   await  $`printf ${hello("sarsh")}`

//   // let path = await import('path') // We can use import,
//   // console.log(path)
//   // let {name} = require(path.join(__dirname, '..', '../basic/package.json')) // and require
//   // console.log(name)

//   // import/excute remote script
  
 
