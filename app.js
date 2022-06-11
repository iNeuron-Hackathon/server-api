const express = require("express")
const app = express()
const errorMiddleware = require("./middleware/error")

app.use(express.json())

//Route import

const menu = require("./routes/menuRoute")
const order = require("./routes/orderRoute")

console.log('menu hj')
app.use("/api/v1",menu)
app.use("/api/v1",order)



//middleware  for errors
app.use(errorMiddleware)

module.exports = app

