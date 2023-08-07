const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function(rec, res){
    const items = [
        {
            title: "D",
            message: "esenvolvedor Back End"
        },
        {
            title: "E",
            message: "studante de ADS"
        }
    ]
    res.render("pages/index", {
        qualitys: items,
    })
})

app.get("/about", function(rec, res){
    res.render("pages/about")
})

app.listen(8080)
console.log('Rodando...')