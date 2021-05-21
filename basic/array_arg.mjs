#! /usr/bin/env zx
// $.verbose=false
// Passing array of values ????
let files = ["file1","file2","file3"]
// await $`tar cz ${files}`
await $`echo ${files}`
await $`echo 中文測試`