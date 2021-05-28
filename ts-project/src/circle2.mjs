#!/usr/bin/env node

//  explicite import  !!! 
//  shebang : <node>

import {$} from 'zx'
 export {sayHi} from "./hi.mjs"


const PI = 3.14159265359;

export function area(radius) {
  return (radius ** 2) * PI;
}

export function circumference(radius) {
  return 2 * radius * PI;
}
