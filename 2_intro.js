// GLOBALS - NO WINDOW!!!

//__dirname    - path to current directory
// __filename  - filename
// require     - function to use modules(CommonJS)
// module       - info about current module(file)
// process     - info about env where the program is being executed  

console.log(__dirname)
setInterval(()=>{
    console.log('This setInnterval which repeat the process until user interference with interval of 100ms')
},1000)