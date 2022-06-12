const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
    default:"lorem ipsum"
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [4, "Price cannot exceed 8 characters"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);