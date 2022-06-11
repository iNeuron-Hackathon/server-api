const Menu = require("../models/MenuModal");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError")

//Create Menu 
exports.createMenus = catchAsyncErrors(async(req,res,next)=>{
    const menu = await Menu.create(req.body);
    res.status(201).json({
        success:true,
        menu
    })
})

//Get All Product
exports.getAllMenus = catchAsyncErrors(async(req,res)=>{

    const menus  = await Menu.find();
    res.status(201).json({
        success:true,
        menus
    })
})

//get single product deltails
exports.getMenuDetails =catchAsyncErrors( async(req,res,next)=>{

    const menu = await Menu.findById(req.params.id);
    if(!menu){
        return next(new ErrorHandler("Menu not found",404))
    }
    res.status(201).json({
        success:true,
        menu
    })
})


//Update any product -- Admin
exports.updateMenu = catchAsyncErrors(async(req,res,next)=>{

    let menu =await Menu.findById(req.params.id);
    if(!menu){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    menu = await Menu.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(201).json({
        success:true,
        menu
    })
})

//Delete Product

exports.deleteMenu = catchAsyncErrors(async(req,res,next)=>{
    const menu = await Menu.findById(req.params.id);
    if(!menu){
        return res.status(500).json({
            success:false,
            message:"Menu not found"
        })
    }
    await menu.remove();
    res.status(201).json({
        success:true,
        message:"Menu deleted successfully"
    })
})