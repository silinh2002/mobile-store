const express = require("express");
const router = express.Router();

var controller = require("../controllers/user.controller");

router.get("/", controller.index);
router.get("/list", controller.listUser);
router.get("/:id", controller.find);

router.post("/create", controller.postCreate);
router.post("/create", controller.postCreate);
router.post("/changepassword", controller.postChangePassword);
router.post("/delete/:id", controller.delete);
module.exports = router;
