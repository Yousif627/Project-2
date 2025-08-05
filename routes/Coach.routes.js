const router = require("express").Router()
const User = require ("../models/User")


router.get('/myDetails', async (req, res) => {
    const currentUser = await User.findById(req.session.user._id)
    res.render('Coach/showDetails.ejs', {currentUser})
})



router.get("/new", async(req,res)=>{
    try{
        const user = await User.findById(req.session.user._id)
        if(user.details){
            return res.redirect("/coach/myDetails")
        }
            res.render("Coach/new.ejs")
        }
    
    catch(error){
      res.send("Error loading new coach details page")
    }
})


router.post('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      currentUser.details = req.body
        await currentUser.save();
        res.render("Coach/showDetails.ejs", {currentUser})
      
      } catch (error) {
    res.send("Error saving coach details")
    }
})


router.get("/myDetails/:id/edit", async(req,res)=>{
    try{
        const currentUser = await User.findById(req.session.user._id);
    +   
        res.render('Coach/edit.ejs', {coachDetails:currentUser.details})
    }
    catch(error){
       res.send("Error loading edit coach details page")
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
   res.send("Error updating coach details")
  }
});

router.delete('/myDetails/:id', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);

    currentUser.details = undefined;

    await currentUser.save();

    res.redirect('/coach/new');
  } catch (error) {
  res.send("Error deleting coach details")  
  }
});



module.exports = router


