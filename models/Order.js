const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  dateOfDeal: {
    type: Date,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  buyer: {
    type: String,
    required: true,
  },
  isWholesale: {
    type: Boolean,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
