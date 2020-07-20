const express = require("express");
const router = express.Router();

var controller = require("../controllers/staff.controller");

router.get("/", controller.index);
router.get("/list", controller.listUser);
router.get("/:id", controller.findById);

router.post("/", controller.postCreateProduct);
router.patch("/:id", controller.postUpdateProduct);
router.delete("/:id", controller.deleteProduct);
module.exports = router;
