# my-zxscript
 * build complex mjs modules system
   - dynamic/static import in .mjs first , then reuire cjs inside .mjs to build complex modules system

# check zx node package version
$ zx --version
# check npm local installation
$ npm ls

# We can use import .mjs and require cjs module together: 
 * ES module via import() && Node.js module  via require("path-name")
 * .mjs can use require(cjs)

 

# excute remote script
$ zx https://raw.githubusercontent.com/garywu125/my-zxscript/main/markdown/main.md 


# zx allow to run mjs/md/ts extension

### ???? md file extension does not allow typescript


??? import module function ??? module made with js/ts