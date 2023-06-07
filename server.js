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

app.get("/tip/:total/:tipPercentage", (req,res) =>{
    const total = req.params.total 
    tipPercent = req.params.tipPercentage
    all = Number(total) * Number(tipPercent) / 100  
    // testing
    console.log(all)
    // testing
    res.send((all.toString()))
})

///////////////////////////
// Server Listener
///////////////////////////
app.listen(3000)


