#! /usr/bin/env zx

/***
 *  esm.mjs
 * 
 */

//   import another ESM moduleJS from esm module
const { deviceName} = await import(`${__dirname}/utils.mjs`);

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function hello(name) {
  return "Hello " + capitalize(name) +` , my mobile phone:${deviceName} `;
  // return  "hello world"
} 

