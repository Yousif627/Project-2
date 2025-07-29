const router = require("express").Router()
const User = require ("../models/User")
const bcrypt = require("bcrypt")



router.get("/sign-up", (req,res)=>{
    res.render("auth/sign-up.ejs", {error:null})
})

router.post("/sign-up", async (req,res)=>{
    try


})