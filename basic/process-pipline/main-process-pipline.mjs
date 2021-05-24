#! /usr/bin/env zx

/***
 *  pipe-main.mjs
 *
 */

await $`whoami`;
await $`ls -la ${__dirname}`;
// await $`ls -lt |  head -n 2 | tail +2  | awk '{ print $NF }' `
// let target=await $`ls -lt |  sed -n '2p' | awk '{ print $NF }' `
// await $`cat ${target}`

await $`ls -lt `
  .pipe($`head -n 2`)
  .pipe($`tail +2`)
  .pipe($`awk '{ print $NF }'`);

let target = await $`ls -lt`
  .pipe($`sed -n '2p'`)
  .pipe($`awk '{ print $NF }'`);

console.log("file name:1 "+target.stdout);
console.log(`file name:2 ${target.stdout}`);
console.log(`file name:3 ${target.stdout}`);


let greeting = await $`printf "hello"`
  .pipe($`awk '{printf $1", world!"}'`)
  .pipe($`tr '[a-z]' '[A-Z]'`);

console.log(greeting.stdout);

