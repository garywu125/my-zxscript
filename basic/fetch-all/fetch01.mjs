#!/usr/bin/env zx
// fetch remote
let resp = await fetch('http://wttr.in')
if (resp.ok) {
  console.log(await resp.text())
}

// read content of local file
let content = await fs.readFile(`${__dirname}/packages.json`)
console.log(content.toString())