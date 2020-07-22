const express = require("express");
const router = express.Router();

var controller = require("../controllers/staff.controller");

router.get("/", controller.index);
router.get("/Users", controller.listUser);
router.get("/Users/:id", controller.findById);

router.get("/Products", controller.listProducts);
router.get("/Products/:id", controller.findProduct);

router.post("/", controller.postCreateProduct);
router.patch("/:id", controller.postUpdateProduct);
router.delete("/:id", controller.deleteProduct);
module.exports = router;
