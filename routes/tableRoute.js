const express = require("express");
const { createTable,getAllTables } = require("../controllers/tableController");

const router = express.Router();
router.route("/tables").get(getAllTables)
router.route("/table/new").post(createTable);


module.exports = router;