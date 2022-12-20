1. install dependencies
    npm install

2. Run the app using the
    npx ts-node-dev src/main.ts



Troubleshooting:

> try to update npm version, you may need to use sudo if needed
    npm install -g npm@latest 


> Error: Cannot find module 'rxjs'
    npm i rxjs --save  (i only this command, you may need the following)
    npm i rxjs-compat --save
