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
  }
});

router.get("/:id/edit", isSignedIn, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service || service.creator.toString() !== req.session.user._id) {
      return res.send("Unauthorized or not found");
    }
    res.render("Service/edit", { service });
  } catch (error) {
   console.log(error);
  }
});

router.put("/:id", isSignedIn, async (req, res) => {
  try {
    const service = await Service.findOneAndUpdate(
      { _id: req.params.id, creator: req.session.user._id },
      req.body,
      { new: true }
    );
    if (!service) return res.send("Unauthorized or not found");
    res.redirect("/service/my-services");
  } catch (error) {
  console.log(error);
  }
});

router.delete("/:id", isSignedIn, async (req, res) => {
  try {
    await Service.findOneAndDelete({ _id: req.params.id, creator: req.session.user._id });
    res.redirect("/service/my-services");
  } catch (error) {
    console.log(error);
  }
});







module.exports = router