const express = require("express");
const router = express.Router();
const blockedUrlController = require("../controllers/blockedUrlController");

router.get("/", blockedUrlController.index);
router.post("/", blockedUrlController.store);
router.put("/", blockedUrlController.update);
router.delete("/", blockedUrlController.delete);

module.exports = router;
