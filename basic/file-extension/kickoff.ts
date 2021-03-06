#!/usr/bin/env zx
import 'zx'
// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

// let name="obsolete"
// console.log(chalk.black.bgCyanBright(name))

await $`whoami`
await $`ls -la ${__dirname}`
await $`ls -lt |  head -n 2 | tail +2  | awk '{ print $NF }' `
let target=await $`ls -lt |  sed -n '2p' | awk '{ print $NF }' `
await $`cat ${target}`

void async function () {
    await $`pwd`
  }()


  // mix ts  with commonjs module / ESM module
  // require .js file extension
  // import .mjs file extension
  
  
  require(`${__dirname}/cjs.js`);

  // import local module (include remote)
  let { hello } = await import(`${__dirname}/esm.mjs`);
  // console.log(hello("John"));
  // console.log(hello("Sarah"));  

  await  $`printf ${hello("john")}`
  await  $`printf ${hello("sarsh")}`

  // let path = await import('path') // We can use import,
  // console.log(path)
  // let {name} = require(path.join(__dirname, '..', '../basic/package.json')) // and require
  // console.log(name)

  // import/excute remote script
  
 

 

