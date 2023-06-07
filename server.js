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

app.get('/magic/:wish', (req,res)=>{
    // Testing
    console.log(req.params)
    
    const wish = req.params.wish
    
    // list of responses
    const options = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let randumNum = Math.floor(Math.random() * options.length)
    res.send(`${wish} <h1>${options[randumNum]}</h1>`)

})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(3000)


