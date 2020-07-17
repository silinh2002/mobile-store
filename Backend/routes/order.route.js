const express = require("express");
const router = express.Router();

var controller = require("../controllers/order.controller");

router.get("/", controller.listOrder);
router.get("/:id", controller.find);

router.post("/create", controller.postCreate);
router.post("/update/:id", controller.postUpdate);
router.post("/delete/:id", controller.delete);

module.exports = router;
