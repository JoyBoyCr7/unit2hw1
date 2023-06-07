////////////////////////
// Setup - Import deps and create app object
////////////////////////

const express = require("express")

const app = express()

//////////////////////
// Declare Middleware
//////////////////////
app.get("/greeting/",(req,res)=>{
    res.send("Hello stranger")
})

app.get(`/greeting/:name`,(req,res)=>{
    const name = req.params.name
    res.send(` Wow! Hello there, ${name}`)
})



///////////////////////////
// Server Listener
///////////////////////////
app.listen(3000)


