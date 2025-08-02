const router = require("express").Router()
const User = require ("../models/User")

// Get the show details page
router.get('/myDetails', async (req, res) => {
    const currentUser = await User.findById(req.session.user._id)
    res.render('Coach/showDetails.ejs', {currentUser})
})


//Creates a new coach detail
router.get("/new", async(req,res)=>{
    try{
        const user = await User.findById(req.session.user._id)
        if(user.details){
            return res.redirect("/coach/myDetails")
        }
            res.render("Coach/new.ejs")
        }
    
    catch(error){
        console.log(error)
    }
})

//Posts a new coach detail
router.post('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      currentUser.details = req.body
        await currentUser.save();
        res.render("Coach/showDetails.ejs", {currentUser})
        console.log(currentUser)
      } catch (error) {
      console.log(error);
    }
})


router.get("/myDetails/:id/edit", async(req,res)=>{
    try{
        const currentUser = await User.findById(req.session.user._id);
    +   console.log(currentUser)
        res.render('Coach/edit.ejs', {coachDetails:currentUser.details})
    }
    catch(error){
        console.log(error)
    }
})

router.put('/myDetails/:id', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    
    currentUser.details.name = req.body.name;
    currentUser.details.age = req.body.age;
    currentUser.details.description = req.body.description;

    await currentUser.save();

    res.redirect('/coach/myDetails');
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating coach details.");
  }
});




module.exports = router


