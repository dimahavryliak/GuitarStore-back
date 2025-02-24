const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/Buyer");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Logged out" });
});

module.exports = router;
