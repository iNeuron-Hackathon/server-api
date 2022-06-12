const express = require("express");
const { createOrder,getAllOrders } = require("../controllers/OrderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
router.route("/orders").get(isAuthenticatedUser, authorizeRoles('admin'), getAllOrders)
router.route("/order/new").post(isAuthenticatedUser, createOrder);

module.exports = router;