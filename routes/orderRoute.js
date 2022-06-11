const express = require("express");
const { createOrder,getAllOrders } = require("../controllers/OrderController");

const router = express.Router();
router.route("/orders").get(getAllOrders)
router.route("/order/new").post(createOrder);


module.exports = router;