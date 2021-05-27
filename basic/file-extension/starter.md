# Pipelines

> You can run this markdown file: `zx examples/pipelines.md`

The `zx` supports Node.js streams and special `pipe()` method can be used to
redirect stdout.

```js
await $`echo "Hello, stdout!"`
  .pipe(fs.createWriteStream('/tmp/output.txt'))

await $`cat /tmp/output.txt`
```

Processes created with `$` gets stdin from `process.stdin`, but we can also
write to child process too:

```js
let p = $`read var; echo "$var";`
p.stdin.write('Hello, stdin!\n')

let {stdout} = await p
```

Pipes can be used to show real-time output of programs:

```js
$.verbose = false

await $`echo 1; sleep 1; echo 2; sleep 1; echo 3;`
  .pipe(process.stdout)
```

Also, the `pipe()` method can combine `$` programs. Same as `|` in bash:

```js
let greeting = await $`printf "hello"`
  .pipe($`awk '{printf $1", world!"}'`)
  .pipe($`tr '[a-z]' '[A-Z]'`)

console.log(greeting.stdout)
```


## we can run javascript control structure

```js
let day=null
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(`today is : ${day}`)

let numText = "";
let numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  if (value%2===0)
  numText = numText + value + "<br>";
}

console.log(numText)


let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + "<br>";
}

console.log(`cars are : ${text}`)

```
# markdown code block support typescript language

