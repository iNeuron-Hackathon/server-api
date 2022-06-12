const Item = require("../models/ItemModal");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError")

//Create Menu 
exports.createItem = catchAsyncErrors(async(req,res,next)=>{
    req.body.user = req.user.id
    const item = await Item.create(req.body);
    res.status(201).json({
        success:true,
        item
    })
})

//Get All Menu
exports.getAllItems = catchAsyncErrors(async(req,res)=>{

    const items  = await Item.find();
    console.log(req.query)
    const {table} = req.query
    if(!table) throw new ErrorHandler('Table not sent', 404)
    const options = {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
      };
    
    res.status(201).cookie('table',table, options).json({
        success:true,
        items
    })
})

//get single Menu details
// exports.getMenuDetails =catchAsyncErrors( async(req,res,next)=>{

//     const menu = await Menu.findById(req.params.id);
//     if(!menu){
//         return next(new ErrorHandler("Menu not found",404))
//     }
//     res.status(201).json({
//         success:true,
//         menu
//     })
// })


//Update any Product -- Admin
exports.updateItem = catchAsyncErrors(async(req,res,next)=>{

    let item =await Item.findById(req.params.id);
    if(!item){
        return res.status(500).json({
            success:false,
            message:"Item not found"
        })
    }
    item = await Item.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(201).json({
        success:true,
        item
    })
})

//Delete Menu

exports.deleteItem = catchAsyncErrors(async(req,res,next)=>{
    const item = await Item.findById(req.params.id);
    if(!item){
        return res.status(500).json({
            success:false,
            message:"Item not found"
        })
    }
    await item.remove();
    res.status(201).json({
        success:true,
        message:"Item deleted successfully"
    })
})