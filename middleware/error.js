const ErrorHandler = require("../utils/errorhandler");

module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.messsage = err.messsage || "Internal Server Error";
    // wrong mongodb id cast error
    if(err.name ==="CastError"){
        const message =`Resouce not found , Invalid:${err.path}`
        err= new ErrorHandler(message,400);
    }


    res.status(err.statusCode).json({
        success:false,
        message : err.message,
    })
}
