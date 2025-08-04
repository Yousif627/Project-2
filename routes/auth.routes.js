const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")


router.get("/sign-up", (req, res) => {
    res.render("auth/sign-up.ejs", { error: null })
})

router.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashedPassword,
      role
    });

    req.session.user = newUser;
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.render("signup", { error: "Signup failed. Try again." });
  }
});




router.get("/login", (req, res) => {
    res.render("auth/login.ejs", { error: null })
})
router.post("/login", async (req, res) => {
  try {
    const userInDatabase = await User.findOne({ username: req.body.username });
    if (!userInDatabase) {
      return res.render("auth/login", { error: "Username not found." });
    }

    const validPassword = bcrypt.compareSync(
      req.body.password,
      userInDatabase.password
    );

    if (!validPassword) {
      return res.render("auth/login", { error: "Incorrect password." });
    }

    req.session.user = {
      username: userInDatabase.username,
      _id: userInDatabase._id,
      role: userInDatabase.role
    };

    // Redirect to home page after login
    res.redirect("/");
  } catch (error) {
    console.error("Error during sign-in:", error);
    res.render("auth/login", { error: "An unexpected error occurred." });
  }
});




router.get("/logout", (req, res) => {
    req.session.destroy()
    res.redirect("/auth/login")
})

module.exports = router