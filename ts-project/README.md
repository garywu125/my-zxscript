
# Mix ESM module with Common js Module
ESM module 為主(mjs) , require module 為輔 , ESM & CJS can work together and inter-operation 
- shebang: #!/usr/bin/env <node> 
- file name .mjs
- load commonJS module dependencies via <require()>
    - npm install third-party module 
    - node.js buit-in module 
- load ESM module dependecies 
    - explicit import declaration <import statement >
    - dynamic import  via <import()> 


# 讓 Node.js Package 同時支援 CommonJS 和 ESM: 

Node >= v13# , 選擇下面兩種其一：
- 將 ES modules 檔案的副檔名存為 .mjs
- 加入 { "type": "module" } 在 package.json 檔案中

https://eddychang.me/node-es6-module


# Warning:
 * ESM modules constains in zx: Only file and data URLs are supported by the default ESM loader.  https:// protocol will not be accepted
 * Remote script constrains in zx : remote script can't not use third party cjs module , beacuse it need <npm tool> to install
   - third party node_modules hosted in github won't be execute
   - nodejs built in module