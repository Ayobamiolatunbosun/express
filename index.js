// import express
const express = require('express');
// create a varibale called express
const app = express();
const fs = require('fs')
// create a port number
const port = 9000

const productRoute = require ("./routes/productRoute")


const homePage = fs.readFileSync("./index.html", 'utf-8')
const aboutPage = fs.readFileSync("./about.html", 'utf-8')
const contactPage = fs.readFileSync("./contact.html", 'utf-8')
const testimonialPage = fs.readFileSync("./testimonials.html", 'utf-8')
const productPage = fs.readFileSync("./product.html", 'utf-8')
const errorPage = fs.readFileSync("./error.html", 'utf-8')


app.get('/',(req,res)=>{
    res.send(homePage)

})

// app.get (`/about`,(req,res)=>{
//     res.send(aboutPage)
// })

// app.get(`/product`,(req,res)=>{
//     res.send(productPage)
// })

// app.get(`/contact`,(req,res)=>{
//     res.send(contactPage)
// })

// app.get(`/testimonial`,(req,res)=>{
//     res.send(testimonialPage)
// })

// app.get(`/error`,(req,res)=>{
//     res.send(errorPage)
// })


// using product route
app.use(productRoute)

// server will now handle json data
app.use(express.json())
// // start your server
app.listen(port, ()=>{
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})