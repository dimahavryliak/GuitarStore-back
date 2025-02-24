const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  dateOfDeal: {
    type: Date,
    required: true,
  },
  products: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  buyer: {
    phone: { type: Number, required: true },
    contactPerson: { type: String, required: true },
    address: { type: String, required: true },
  },
  dealId: {
    type: String,
    required: true,
    unique: true,
  },
});

const Deal = mongoose.model("Deal", dealSchema);

module.exports = Deal;
