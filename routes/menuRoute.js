const express = require("express");
const {  getAllItems,createItem,updateItem,deleteItem} = require("../controllers/menuController");

const router = express.Router();

router.route("/menus").get(getAllItems)
router.route("/menu/new").post(createItem)
router.route("/menu/:id").put(updateItem).delete(deleteItem)

module.exports = router;