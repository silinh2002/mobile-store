const express = require("express");
const router = express.Router();

var controller = require("../controllers/staff.controller");

router.get("/", controller.index);
router.get("/list", controller.listUser);
router.get("/:id", controller.findById);

router.post("/createProduct", controller.postCreateProduct);
router.post("/updateProduct/:id", controller.postUpdateProduct);
router.post("/deleteProduct/:id", controller.deleteProduct);
module.exports = router;
