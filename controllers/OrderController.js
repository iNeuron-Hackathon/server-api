const Order = require("../models/OrderModal");
const Item = require("../models/ItemModal");
const catchAsyncErrors = require("../middleware/catchAsyncError")

//Create a order when user clicks on place order

exports.createOrder = catchAsyncErrors(async(req,res,next)=>{
    const order = await Order.create(req.body);
    res.status(201).json({
        success:true,
        order
    })
})

//Get All Orders --- It is for the Admin
exports.getAllOrders = catchAsyncErrors(async(req,res)=>{

    const orders  = await Order.find();
    console.log('item')
    res.status(201).json({
        success:true,
        orders
    })
})
