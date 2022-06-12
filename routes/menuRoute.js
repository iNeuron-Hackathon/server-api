const express = require("express");
const {  getAllItems,createItem,updateItem,deleteItem} = require("../controllers/MenuController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();
const  {authorizeRoles}=require("../middleware/auth")

router.route("/menu").get(getAllItems)
router.route("/menu/new").post(isAuthenticatedUser,authorizeRoles("admin"), createItem)
router.route("/menu/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateItem).delete(isAuthenticatedUser,authorizeRoles("admin"), deleteItem)

module.exports = router;