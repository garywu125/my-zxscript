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

We can use imports here as well:

```js
await import(`${__dirname}/basics.mjs`)
```