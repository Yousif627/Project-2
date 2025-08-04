const express = require("express");
const router = express.Router();
const Service = require("../models/Service");




function isCoach(req, res, next) {
    console.log(req.session.user);

  if (req.session.user && req.session.user.role === "coach") {
    return next();
  }
  return res.redirect("/service");
}


router.get("/new/:gameName", isCoach, (req, res) => {
  const gameName = req.params.gameName;
  res.render("Service/new.ejs", { gameName });
});


router.post("/", isCoach, async (req, res) => {
  const { gameName, yearsOfExperience, description, price } = req.body;

  const createdService = await Service.create({
    user: req.session.user._id,
    gameName,
    yearsOfExperience,
    description,
    price
  });

  res.redirect("/service/" + createdService.gameName);
});
router.post("/service", async (req, res) => {
  try {
    if (!req.session.currentUser || req.session.currentUser.role !== "coach") {
      return res.redirect("/auth/login");
    }

    const serviceData = {
      ...req.body,
      user: req.session.currentUser._id, 
    };

    await Service.create(serviceData);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.render("services/new.ejs", {
      error: "Failed to create service",
      gameName: req.query.gameName || "",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.render("Service/serviceDetails.ejs", { services, user: req.session.user });
  } catch (error) {
    console.error(error);
    res.send("Error loading services");
  }
});

router.get('/:gameName', async (req, res) => {
  const gameName = req.params.gameName;

  try {
    const services = await Service.find({ gameName: new RegExp(`^${gameName}$`, 'i') }).populate('user');

    res.render('Service/serviceDetails.ejs', { services, gameName });
  } catch (error) {
    console.error(error);
    res.send('Server error');
  }
});



router.get("/:id/edit", async (req, res) => {
  try {
    const services = await Service.findById(req.params.id);
    if (!services) return res.send("Service not found");

   
    if (services.user.toString() !== req.session.user._id.toString()) {
      return res.send("Not authorized");
    }

    res.render("Service/edit.ejs", { services });
  } catch (error) {
    console.log(error);
    res.send("Error loading service for edit");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const editService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/service/${editService.gameName}`);
  }
  catch(error){
    console.error("Error updating service:", error);
    res.send("Error updating service");
  }
});


router.post("/:id", async (req, res) => {
  try {
    const services = await Service.findOneAndUpdate(
      { _id: req.params.id, creator: req.session.user._id },
      req.body,
      { new: true }
    );

    if (!services) return res.send("Not authorized");

    res.redirect("/service");
  } catch (error) {
    console.error(error);
    res.send("Error updating service");
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const services = await Service.findByIdAndDelete(req.params.id);

    // if (!services) {
    //   return res.send("Service not found");
    // }
    // if (services.creator.toString() !== req.session.user._id.toString()) {
    //   return res.send("Not authorized");
    // }
    // await services.deleteOne();
    res.redirect(`/service/${services.gameName}`);
  } catch (error) {
    console.error(error);
    res.send("Error deleting service");
  }
});

module.exports = router;
