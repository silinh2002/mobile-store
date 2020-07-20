const express = require("express");
const router = express.Router();

var controller = require("../controllers/user.controller");

router.get("/", controller.index);
router.get("/list", controller.listUser);
router.get("/:id", controller.findById);

router.post("/create", controller.postCreate);
router.post("/update", controller.postUpdate);
router.post("/changepassword", controller.postChangePassword);
router.post("/delete/:id", controller.delete);
module.exports = router;
