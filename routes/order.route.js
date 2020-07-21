const express = require("express");
const router = express.Router();

var controller = require("../controllers/order.controller");

router.get("/", controller.listOrder);
router.get("/:id", controller.find);

router.post("/", controller.postCreate);
router.patch("/:id", controller.postUpdate);
router.delete("/:id", controller.delete);

module.exports = router;
