const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function(rec, res){
    res.render("index")
})

app.get("/about", function(rec, res){
    res.render("about")
})

app.listen(8080)
console.log('Rodando...')