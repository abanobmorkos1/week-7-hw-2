const express = require("express");
const drinks = require("./models/drinks.js");
const app = express()
const PORT=3333;

// Welcome to the Gitpub App!

app.get("/" , (req , res) => {
    res.send(`<h1> welcome to the Gitpub App! </h1>`)
})
// Setting up your show route

app.get("/drinks/:id", (req, res) => {
    const id = (req.params.id)
    const drink = drinks[id];
    res.render("show.ejs", { drinks : drinks });
});

app.get("/show.ejs" , (req ,res) => {
    const id = req.params.id
    const drink = drinks[id];
    res.render("show.ejs")
})

// Database
app.get("/drinks" , (req ,res) => {
    res.render("./index.ejs" , {drinks : drinks})
})

// LISTEN 
app.listen(PORT , (req , res) => {
    console.log(`Listeing on ${PORT}`)
})

