const { render } = require("ejs")
const Coach = require("../models/Coach")
const Trainee = require("../models/Trainee")
const router = require ("express").Router()



router.get("/new", async (req, res)=>{
    try{

        const coach = await Coach.find()

        res.render("Coach/newCoach.ejs", {coach: coach})
    }
    catch(erro){
        console.log(error)
    }
})

router.post("/", async (req,res)=>{
    try{
        console.log(req.body)

        const createdCoach = await Coach.create(req.body)
        res.render("Coach/showCoach.ejs")
    }
    catch(error){
        console.log(error)
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const coach = await Coach.findById(req.params.id).populate("coach")
        
        res.render("Coach/showCoach.ejs",{Coach:Coach})

    }
    catch(error){
        console.log(error)

    }
})


router.get("/:id/edit", async (req,res)=>{
    try{
        const coach = await Coach.findById(req.params.id)
        res.render("Coach/editCoach.ejs",{coach:coach})

    }
    catch(error){
        console.log(error)
    }
})
  





module.exports = router