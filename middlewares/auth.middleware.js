var User = require("../models/user.model");
var mongoose = require("mongoose");
module.exports = {
  requireAuth: async function (req, res, next) {
    // console.log("typeof cookie: " + typeof req.signedCookies.userId);
    // console.log(" cookie: " + req.signedCookies.userId);
    if (!req.signedCookies.userId) {
      res.send("form login");
      return;
    }

    var user = await User.findByLamda({ _id: req.signedCookies.userId });
    if (!user) {
      res.send("form login");
      return;
    }
    // console.log(user[0]);

    // res.locals.user = user[0];
    // console.log(res.locals.user);
    req.user = user[0];
    next();
  },
};
