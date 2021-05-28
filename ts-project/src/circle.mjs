#!/usr/bin/env zx

// import via import function : await import('ESM module  with .mjs file extension ')
// shebang : <zx>


// *** nested import
export const { sayHi} = await import(`./hi.mjs`);

const PI = 3.14159265359;

export function area(radius) {
  return (radius ** 2) * PI;
}

export function circumference(radius) {
  return 2 * radius * PI;
}
