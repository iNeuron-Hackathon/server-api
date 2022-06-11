const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")


//config
dotenv.config({path:"server/config/config.env"});

//connecting to database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on https://localhost:${process.env.PORT}`)
})
