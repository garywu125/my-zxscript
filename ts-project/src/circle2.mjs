#!/usr/bin/env zx
/**
 *   notes :
 *        -  explicite ESM Module import , shebang : <node>
 * 
 *   zx: Only file and data URLs are supported by the default ESM loader.
 *       https:// protocol will not be accepted 
 * 
 *  data url :
 *           Data URI 是一種檔案格式，其資料全部都是經過 base64 編碼之後，以文字的方式來儲存的，
 *           這樣以文字方式儲存的好處就是可以直接寫進(embedded) HTML 或 CSS 中，不需要透過外部的檔案儲存,reduce http request
 * 
 */

// Declare ESM modules dependencies ,
// import {$} from 'zx'

// .mjs allow declare import
//  import {sayHi} from "./hi.mjs"
//  export {sayHi}

export {sayHi} from "./hi.mjs"

// mjs alllow require function to load esm module
export const {snakeCase} = require('lodash');
export {hello} from "./say.mjs"

const PI = 3.14159265359;

export function area(radius) {
  return (radius ** 2) * PI;
}

export function circumference(radius) {
  return 2 * radius * PI;
}



