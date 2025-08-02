const router = require("express").Router()
const Service = require("../models/Service")

router.get("/", (req,res)=>{
    res.render("Service/new.ejs")
})
router.get("/new", (req,res)=>{
    res.render("Service/new.ejs")
})

router.post("/", async(req,res)=>{
    try{
        console.log(req.body)
        const createService = await Service.create(req.body)
        res.redirect("/Service/new")
        console.log(createService)

    }
    catch(error){
        console.log(error)
    }
})









module.exports = router