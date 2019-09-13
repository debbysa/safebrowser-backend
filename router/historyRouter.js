const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");

router.get("/", historyController.index);
router.get("/:pluginCode", historyController.details);
router.post("/", historyController.store);
router.put("/:pluginCode", historyController.update);
router.delete("/:pluginCode", historyController.delete);

module.exports = router;
