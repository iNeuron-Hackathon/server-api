const Order = require("../models/OrderModal");
const Item = require("../models/ItemModal");


const catchAsyncErrors = require("../middleware/catchAsyncError");
const Table = require("../models/TableModal");
const User = require("../models/userModal");
const ErrorHandler = require("../utils/errorhandler");

//Create a order when user clicks on place order

exports.createOrder = catchAsyncErrors(async(req,res,next)=>{
    // const or = req.body
    const {table:tble_no} = req.cookies
    const table = await Table.findOne({no:Number(tble_no)})
    if(!table) throw new ErrorHandler('Table not found', 404)
    table.status = 'occupied'
    await table.save()

    const order = new Order(req.body);
    order.table = table
    await order.save()

    const user = await User.findById(req.user._id)
    user.table = table;
    await user.save()
    
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
