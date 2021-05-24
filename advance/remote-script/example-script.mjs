#!/usr/bin/env dx
/**
 *  run remote script:
 * 		$zx https://raw.githubusercontent.com/garywu125/my-zxscript/main/advance/remote-script/example-script.mjs
 * 
 * 
 */


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
