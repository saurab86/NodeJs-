const {readFile, writeFile}= require('fs')
const { result } = require('lodash')

console.log('Started a first task')

// CHECK FILE PATH
readFile('./content/subfolder/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed the first task')
})
console.log("Starting next task")