# Markdown Scripts

It's possible to write scripts using markdown. Only code blocks will be executed
by zx. Try to run `zx examples/index.md`.

```js
await $`whoami`
await $`ls -la ${__dirname}`
await $`ls -lt |  head -n 2 | tail +2  | awk '{ print $NF }' `
let target=await $`ls -lt |  sed -n '2p' | awk '{ print $NF }' `
await $`cat ${target}`
```

The `__filename` will be pointed to **index.md**:

```js
console.log(chalk.yellowBright(__filename))
```

We can use import ES Module here as well:

```js
// load another mjs && execute
await import(`${__dirname}/basics.mjs`)
```
We can use import and require together:
  use import ESM  module via import('module-name') , the module file extension name must be .mjs
We can use import node.js  module via require('module-name')

```js
// We can use import and require together:
let {hello} = await import(`${__dirname}/say.mjs`);
console.log(hello("John"))
console.log(hello("Sarah"))
require('find-me')
```