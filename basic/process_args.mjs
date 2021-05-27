#!/usr/bin/env zx
// $ zx ./process_args.mjs 3 4
console.log(`${process.argv[3]} + ${process.argv[4]} = ${process.argv[3] + process.argv[4]}`)
let files = ["file1","file2","file3"]
// await $`tar cz ${files}`
await $`echo ${files}`
await $`echo 中文測試`