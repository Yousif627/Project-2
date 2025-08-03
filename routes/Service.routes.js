const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
const isSignedIn = require("../middleware/isSignedIn");


router.get("/", async (req, res) => {
  try {
    const services = await Service.find().populate("creator", "username");
    res.render("Service/serviceDetails.ejs", { services,user: req.session.user });
  } catch (error) {
    console.error(error);
    res.send("Error loading services");
  }
});

router.get("/new",isSignedIn, (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("Service/new.ejs");
});


router.post("/",isSignedIn, async (req, res) => {
  try {
    const newService = new Service({
      gameName: req.body.gameName,
      gameExperience: req.body.gameExperience,
      price: req.body.price,
      description: req.body.description,
      creator: req.session.user._id 
    });

    await newService.save();
    res.redirect("/service");
  } catch (error) {
    console.error(error);
    res.send("Error creating service");
  }
});


router.get("/:id/edit",isSignedIn, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.send("Service not found");

   
    if (service.creator.toString() !== req.session.user._id.toString()) {
      return res.send("Not authorized");
    }

    res.render("Service/edit.ejs", { service });
  } catch (error) {
    console.error(error);
    res.send("Error loading service for edit");
  }
});


router.post("/:id", isSignedIn, async (req, res) => {
  try {
    const service = await Service.findOneAndUpdate(
      { _id: req.params.id, creator: req.session.user._id },
      req.body,
      { new: true }
    );

    if (!service) return res.status(403).send("Not authorized");

    res.redirect("/service");
  } catch (error) {
    console.error(error);
    res.send("Error updating service");
  }
});


router.delete("/:id",isSignedIn, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.send("Service not found");
    }
    if (service.creator.toString() !== req.session.user._id.toString()) {
      return res.send("Not authorized");
    }
    await service.deleteOne();
    res.redirect("/service");
  } catch (error) {
    console.error(error);
    res.send("Error deleting service");
  }
});

module.exports = router;
