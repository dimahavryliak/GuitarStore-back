const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  phoneNumber: { type: Number, required: true },
  ContactPerson: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("Buyer", buyerSchema);
