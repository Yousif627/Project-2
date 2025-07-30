const router = require("express").Router()
const User = require ("../models/User")

router.get("/new", async(req,res)=>{
    try{
        res.render("/Coach/new.ejs")
    }
    catch(error){
        console.log(error)
    }
})

router.get("/", async (req, res)=>{
    try{
        const allCoaches = await User.find().populate("Coach")
        res.render("Coach/showDetail.ejs",{allCoaches:allCoaches})

    }
    catch(error){
        console.log(error)
    }
})


module.exports = router
