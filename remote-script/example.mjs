console.log(chalk.black.bgYellow(' This is an example of remote script '))

let name = await question('What is you name? ')

let answer = await question(chalk`Should I run {white.bgRed  rm -rf ${os.homedir()} }, ${name}? [Y/n] `)

if (answer == 'n') {
	console.log(`I'm gonna run it anyway...`)
} else {
	console.log(`As you wish...`)
}

console.log(chalk`$ {green.bold rm} -rf ${os.homedir()}`)

console.log(chalk`{black.bgGreen  OK }`)

// local ESM module

const { area:myArea, circumference,sayHi:myHi } = await import(`./circle.mjs`);  

const r = 3;

console.log(myHi('LogRocket'))

console.log(`Circle with radius ${r} has
  area: ${myArea(r)};
  circunference: ${circumference(r)}`);

console.log("finally")



// using full path to load third party cjs module
// const {snakeCase} = require('lodash');

// nodejs buit-in module ok

// var querystring = require('querystring');
// var q = querystring.parse('year=2017&month=february');
// console.log(q.year);


// third party nodejs module , remote script excution will have path problem
// ['HelloWorld', 'left pad', 'ECMAScript'].forEach(text => {
//     console.log(snakeCase(text));
//   });

