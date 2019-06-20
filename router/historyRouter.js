const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");

router.get("/", historyController.index);
router.post("/", historyController.store);

module.exports = router;
