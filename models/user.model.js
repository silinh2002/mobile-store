var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    phone: String,
    name: String,
    email: String,
    password: String,
    avatar: String,
    isDeleted: Boolean,
    position: ["admin", "staff", "customer"],
    carts: [Object],
  },
  { versionKey: false }
);

var User = mongoose.model("User", userSchema, "users");

module.exports = {
  findByLamda: async function (lamda) {
    var users = await User.find(lamda);
    return users;
  },
  createByLamda: async function (lamda) {
    await User.insertMany(lamda);
  },
  updateByLamda: async function (id, lamda) {
    await User.updateOne(id, lamda);
  },
  deleteByLamda: async function (lamda) {
    await User.deleteOne(lamda);
  },
};
