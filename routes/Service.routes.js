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

router.get("/my-services", isSignedIn, async (req, res) => {
  try {
    const myServices = await Service.find({ creator: req.session.user._id });
    res.render("Service/serviceDetails.ejs", { services: myServices });
  } catch (err) {
    res.send("Error fetching services: " + err.message);
  }
});







module.exports = router