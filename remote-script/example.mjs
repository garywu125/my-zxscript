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



// remote ESM module : import remote ESM module will have path problem,Only file and data URLs are supported by the default ESM loader


// const { area:myArea, circumference,sayHi:myHi } = await import('https://raw.githubusercontent.com/garywu125/my-zxscript/main/remote-script/circle.mjs')


// local ESM module : remote script excution will have path problem to load module

 const { area:myArea, circumference,sayHi:myHi } = await import(`./circle.mjs`);  

const r = 3;

console.log(myHi('LogRocket'))

console.log(`Circle with radius ${r} has
  area: ${myArea(r)};
  circunference: ${circumference(r)}`);

console.log("finally")



// built in node module will be ok 

var querystring = require('querystring');
var q = querystring.parse('year=2017&month=february');
console.log(q.year);


// local cjs module : remote script excution will have path problem to load module

const {snakeCase} = require('lodash');

['HelloWorld', 'left pad', 'ECMAScript'].forEach(text => {
    console.log(snakeCase(text));
  });

