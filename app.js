const port = 7070
const http = require('http')
const fs = require("fs")

// storing pages in a variable


const server = http.createServer((req,response)=>{
    // response.end("this is my creation")
    let path = req.url
    if(path==="/"||path==="/home"){
        response.end(homePage)
    }  else if(path==="/about"){
        response.end(aboutPage)
    } else if(path==="/testimonials"){
        response.end(testimonialPage)
    }else if(path==="/contact"){
        response.end(contactPage)
    } else 
    (response.end(errorPage))
})



server.listen(port,()=>{
    console.log("Welocome to creation3")
})