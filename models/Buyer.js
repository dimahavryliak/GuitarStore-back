const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  phone: { type: Number, required: true },
  contactPerson: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("Buyer", buyerSchema);
