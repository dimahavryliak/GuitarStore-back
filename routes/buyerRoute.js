const express = require("express");
const Buyer = require("../models/Buyer");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const buyer = new Buyer(req.body);
    await buyer.save();
    res.status(201).json(buyer);
  } catch (error) {
    console.error("Error creating buyer:", error);
    if (error.code === 11000) {
      res
        .status(400)
        .json({ error: "Duplicate key error: Phone number must be unique" });
    } else {
      res.status(500).json({ error: "Error creating buyer" });
    }
  }
});

module.exports = router;
