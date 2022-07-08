const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getDate()
    console.log(method,url,time)
    res.send('Testing')

    // next()
    // if we use next() it will send its own response i.e 'Home' rather than response form middleware
}

module.exports = logger 