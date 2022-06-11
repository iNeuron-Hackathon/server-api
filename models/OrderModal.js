const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  orderItems:[{
      item:{
          type:mongoose.Schema.ObjectId,
          ref:"Item",
          required:true
      },
      qty: {
          type: Number,
          required: true,
          default: 1
      }
  }
  ],
  table:{
    type:mongoose.Schema.ObjectId,
    ref:"Table",
    required:true
}
});

module.exports = mongoose.model("Order", orderSchema);