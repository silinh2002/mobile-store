const express = require("express");
const router = express.Router();

var controller = require("../controllers/admin.controller");

router.get("/", controller.index);
router.get("/list", controller.listUser);
router.get("/:id", controller.find);

router.post("/createUser", controller.postCreateUser);
router.post("/updateUser/:id", controller.postUpdateUser);
router.post("/deleteUser/:id", controller.deleteUser);

router.post("/createProduct", controller.postCreateProduct);
router.post("/updateProduct/:id", controller.postUpdateProduct);
router.post("/deleteProduct/:id", controller.deleteProduct);
module.exports = router;
