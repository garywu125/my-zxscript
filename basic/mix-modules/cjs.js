#!/usr/bin/env zx

void async function () {
    await $`echo "Hello, CommonJS!"`
  }()
    .catch(console.error)

  // got third-party npm package  

  const { nanoid } = require("nanoid");

    // It will generate and return an ID with 21 characters
   const id = nanoid();    

  //  交叉使用 between commonjs module and require module
  console.log(`${chalk.green("nano id:")}  ${chalk.red(id)}`);