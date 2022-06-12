const express = require("express")
const app = express()
const errorMiddleware = require("./middleware/error")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


dotenv.config();

//Route import

const menu = require("./routes/menuRoute")
const order = require("./routes/orderRoute")
const user = require("./routes/userRoute")
const table = require("./routes/tableRoute")


//middleware

app.use("/api/v1",menu)
app.use("/api/v1",user)
app.use("/api/v1",order)
app.use("/api/v1",table)




//middleware  for errors
app.use(errorMiddleware)



module.exports = app

