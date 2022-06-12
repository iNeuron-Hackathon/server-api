const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database");


process.on("uncaughtException",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down this server due to Uncaught Exception`)
    process.exit(1)
})


//config
dotenv.config();

//connecting to database
connectDatabase()


const server = app.listen(4000,()=>{
    console.log(`Server is working on https://localhost:4000`)
})


//unhandled promise Rejection eg.wrong mongo
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down this server due to unhandled Promise Rejection`)
    server.close(()=>{
        process.exit(1)
    })
})
