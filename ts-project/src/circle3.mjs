#!/usr/bin/env zx

/**
 *  .mjs allow declare import , but ts does not allow declare import
 * 
 * 
 */

import { area, circumference,sayHi,snakeCase } from "./circle2.mjs";  

['HelloWorld', 'left pad', 'ECMAScript'].forEach(text => {
  console.log(snakeCase(text));
});


