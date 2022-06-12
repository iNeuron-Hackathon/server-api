const Table = require("../models/TableModal");

const catchAsyncErrors = require("../middleware/catchAsyncError")

//Create a table 

exports.createTable = catchAsyncErrors(async(req,res,next)=>{
    const table = await Table.create(req.body);
    res.status(201).json({
        success:true,
        table
    })
})

//get all Tables
exports.getAllTables = catchAsyncErrors(async(req,res)=>{

    const tables  = await Table.find();
    res.status(201).json({
        success:true,
        tables
    })
})

