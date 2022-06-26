const { readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})
