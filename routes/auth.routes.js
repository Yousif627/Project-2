const router = require("express").Router()
const User = require ("../models/User")
const bcrypt = require("bcrypt")



router.get("/sign-up", (req,res)=>{
    res.render("auth/sign-up.ejs", {error:null})
})

router.post("/sign-up", async (req,res)=>{
    try{
        const { username, password} = req.body;


        if (!username || !password){
            return res.render("auth/sign-up",{
                error:"All fields are required."
            });
        }

            if (password.length < 8) {
            return res.render("auth/sign-up", {
                error: "Password must be at least 6 characters long."
            });
        }

           const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.render("auth/sign-up", {
                error: "Username is already taken."

            });
        }



    }
    catch(error){
        console.log("error ahs appeared ")
    }


})