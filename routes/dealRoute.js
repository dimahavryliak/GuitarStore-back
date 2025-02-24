const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Deal = require("../models/Deal");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { dateOfDeal, products, buyer } = req.body;

    const deal = new Deal({
      dateOfDeal,
      products,
      buyer,
      dealId: uuidv4(),
    });

    await deal.save();
    res.status(201).json(deal);
  } catch (error) {
    console.error("Error creating deal:", error);
    res.status(500).json({ error: "Error creating deal" });
  }
});

module.exports = router;
