var User = require("../models/user.model");

module.exports = {
  index: async function (req, res) {
    var user = {
      id: req.user._id,
      name: req.user.name,
      phone: req.user.phone,
      email: req.user.email,
      avatar: req.user.avatar,
    };
    res.json(user);
  },
  listUser: async function (req, res) {
    var users = await User.findByLamda();
    res.json(users);
  },
  find: async function (req, res) {
    var id = req.params.id;
    var users = await User.findByLamda({ _id: id });
    res.json(users[0]);
  },
  postCreate: async function (req, res, next) {
    var entity = {
      phone: req.body.phone || "",
      name: req.body.name || "",
      email: req.body.email || "",
      password: req.body.password || "",
      avatar: req.body.avatar || "",
      isDeleted: false,
    };
    try {
      await User.createByLamda(entity);
      res.send("Create user successfully");
    } catch (error) {
      next(error);
    }
  },
  postUpdate: async function (req, res, next) {
    var id = req.params.id;
    var entity = {
      phone: req.body.phone || "",
      name: req.body.name || "",
      email: req.body.email || "",
      avatar: req.body.avatar || "",
    };
    for (var item in entity) {
      if (entity[item] === "") {
        delete entity[item];
      }
    }
    try {
      await User.updateByLamda({ _id: id }, entity);
      res.send("Update user successfully");
    } catch (error) {
      next(error);
    }
  },
  postChangePassword: async function (req, res, next) {
    var id = req.params.id;
    var entity = {
      password: req.body.password || "",
    };
    for (var item in entity) {
      if (entity[item] === "") {
        delete entity[item];
      }
    }
    try {
      await User.updateByLamda({ _id: id }, entity);
      res.send("Update user successfully");
    } catch (error) {
      next(error);
    }
  },
  delete: async function (req, res) {
    var id = req.params.id;
    var entity = {
      isDeleted: true,
    };
    await User.updateByLamda({ _id: id }, entity);
    res.send("Delete user successfully");
  },
};
