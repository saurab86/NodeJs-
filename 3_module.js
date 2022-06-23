// Module
// In CommonJS, every file is module (by default)
// Modules - Encaspsulated Code(only share minunum)

const secret = 'SUPER SECRET'
const susan = "Susan"
const peter = "peter"
const sayHi = (name)=>{
    console.log(`Hello there ${name}`)
}

sayHi('John Snow')
sayHi(susan)
sayHi(peter)