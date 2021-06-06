

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  export function hello(name) {
    return chalk.bold.underline.yellow`Hello  ${capitalize(name)}`
    // return  "hello world"
  }