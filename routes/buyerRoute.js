const express = require("express");
const Buyer = require("../models/Buyer");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { phone, contactPerson, address } = req.body;
    const user = new Buyer({ phone, contactPerson, address });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

module.exports = router;
