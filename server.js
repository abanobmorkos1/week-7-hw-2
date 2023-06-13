const express = require("express");
const drinks = require("./models/drinks");
const app = express()
const PORT=3333;

// Welcome to the Gitpub App!

app.get("/" , (req , res) => {
    res.send(`<h1> welcome to the Gitpub App! </h1>`)
})

// Database

app.get("/drinks" , (req ,res) => {
    res.render("./index.ejs")
})

// LISTEN 
app.listen(PORT , (req , res) => {
    console.log(`Listeing on ${PORT}`)
})
