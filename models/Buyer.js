const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  contactPerson: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("Buyer", buyerSchema);
