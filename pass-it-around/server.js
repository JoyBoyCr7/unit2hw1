const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send(`99 Bottles of beer on the wall <a href="/98">take one down pass it around</a>`)
})


app.get("/:bottles",(req,res)=>{
    let link = ""
    const bottles = Number(req.params.bottles)
    if (bottles > 0){
        link = `<a href=${bottles-1}>take one down pass it around</a>`
    }
    else{
        link = `<a href=/>start over,</a>`
    }
    res.send(`${bottles} Bottles of beer on the wall ${link}`)
})


app.listen(3000)

