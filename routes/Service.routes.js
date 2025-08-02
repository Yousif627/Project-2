const router = require("express").Router();
const Service = require("../models/Service");
const isSignedIn = require("../middleware/isSignedIn");


router.get("/new", isSignedIn, (req, res) => {
  res.render("Service/new");
});

router.post("/", isSignedIn, async (req, res) => {
  try {
    req.body.creator = req.session.user._id;
    const newService = await Service.create(req.body);
    res.redirect("/service/my-services");
  } catch (error) {
    res.send("Error creating service: " + error.message);
  }
});

router.get("/my-services", async (req, res) => {
  try {
    const userId = req.session.user._id;
    const userServices = await Service.find({ creator: userId });
    res.render("Service/serviceDetails.ejs", { userServices });
  } catch (error) {
    console.log(error);
    console.log(error)
  }
});








module.exports = router