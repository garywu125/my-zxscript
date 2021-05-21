/***
 *  say.mjs
 * 
 */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function hello(name) {
  return "Hello " + capitalize(name);
  // return  "hello world"
} 