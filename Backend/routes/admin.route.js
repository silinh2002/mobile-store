const express = require("express");
const router = express.Router();

var controller = require("../controllers/admin.controller");

router.get("/", controller.index);
router.get("/Users", controller.listUser);
router.get("/Users/:id", controller.findUser);

router.get("/Users", controller.listProducts);
router.get("/Users/:id", controller.findProduct);

router.post("/Users", controller.postCreateUser);
router.patch("/Users/:id", controller.postUpdateUser);
router.delete("/Users/:id", controller.deleteUser);

router.post("/Products", controller.postCreateProduct);
router.delete("/Products/:id", controller.deleteProduct);
router.patch("/Products/:id", controller.postUpdateProduct);
module.exports = router;
