var User = require("../models/user.model");
var md5 = require("md5");

module.exports = {
  login: function (req, res) {
    res.send("Form login");
  },
  postLogin: async function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var user = await User.findByLamda({ email: email });
    if (user.length == 0 || user[0].isDeleted == true) {
      res.send("User is not exist");
      return;
    }
    var hashPassword = md5(password);
    if (user[0].password !== hashPassword) {
      res.send("Wrong password");
      return;
    }

    res.cookie("userId", user[0]._id, {
      signed: true,
    });
    res.send(user[0]);
  },
};
