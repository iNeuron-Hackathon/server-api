const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  no: {
    type: Number,
    required: true,
  },
  status:{
    type:String,
    enum:['occupied','free'],
    default:'free'
  }
});

module.exports = mongoose.model("Table", tableSchema);