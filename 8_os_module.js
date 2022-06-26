// OS module provides many useful built in methods and propeties for interacting with OS and server.

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absloute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absloute)