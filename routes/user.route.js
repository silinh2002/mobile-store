const express = require("express");
const router = express.Router();

var controller = require("../controllers/user.controller");

router.get("/", controller.index);
router.get("/list", controller.listUser);
router.get("/:id", controller.findById);

router.post("/", controller.postCreate);
router.patch("/:id", controller.postUpdate);
router.delete("/:id", controller.delete);
// router.post("/changepassword", controller.postChangePassword);
module.exports = router;
