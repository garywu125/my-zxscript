
// await import ESM module  with .mjs file extension
// sayHi reexported from another .mjs
//  $ npm install --save esm to install the module

// *** nested import
export const { sayHi} = await import(`${__dirname}/hi.mjs`);

const PI = 3.14159265359;

export function area(radius) {
  return (radius ** 2) * PI;
}

export function circumference(radius) {
  return 2 * radius * PI;
}
