// Module
// In CommonJS, every file is module (by default)
// Modules - Encaspsulated Code(only share minunum)

// const secret = 'SUPER SECRET'
// const susan = "Susan"
// const peter = "peter"

// const sayHi = (name)=>{
//     console.log(`Hello there ${name}`)
// }

const names = require('./4_first module')
const sayHi = require('./5_secondmodule')

console.log(names)
sayHi(names.peter)
sayHi(names.susan)

// *****This is a root module where the variables from 4_firstmodule.js can be accessed.
// By using require('./) keyword we can acces the variables as object from the module_firstmodule.js