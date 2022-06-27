// NPM is a Node package manager
// npm -- global command, comes with noded

// local dependency -- use it oly in this particular project
//npm i <packagename>

// global dependedncy -- use it in any project
// npm install --g<packageName>
// sudo npm install -g --<packageName>(mac)

// package.json = manifest file(stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm i lodash (type in terminal) It will automatically add the lodash dependency in package.json file

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)