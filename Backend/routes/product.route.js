const express = require("express");
const router = express.Router();

var controller = require("../controllers/product.controller");

router.get("/", controller.listProduct);
router.get("/:id", controller.findById);
router.post("/", controller.postCreate);
router.patch("/:id", controller.postUpdate);
router.delete("/:id", controller.delete);

module.exports = router;
