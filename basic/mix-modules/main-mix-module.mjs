#! /usr/bin/env zx
/**
 *  import local/remote module and error handling
 *  -shebang First
 *  -load which kind of module
 *   - comomnJS:require("module-file.js")
 *   - ESM:import("module-file.mjs")
 * 
 *   todo : require and import work together
 *       - ?? export function from require module and passed to export frunction from import module
 */
// $.verbose=false
try {    
  // load and execute .mjs files  
  await import(`${__dirname}/js-with-zx.mjs`);
  // execute commonJS module  
  require(`${__dirname}/cjs.js`);
//   load exports from .mjs files
  let { hello } = await import(`${__dirname}/esm.mjs`);
  console.log(hello("John"));
  console.log(hello("Sarah"));  
  // ??? you can not import ts module ???
  // import(`${__dirname}/myts.ts`);

} catch (p) {
  console.log(`Exit code: ${p.exitCode}`);
  console.log(`${chalk.green("Error:")}  ${chalk.red(p.stderr)}`);
  // console.log(` ${chalk.red('Error:') ${p.stderr}`)
}

