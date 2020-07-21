var mongoose = require("mongoose");

var productSchema = new mongoose.Schema(
  {
    name: String,
    trademark: String,
    description: String,
    type: String,
    imageUrl: String,
    price: String,
    status: String,
    isDeleted: Boolean,
  },
  { versionKey: false }
);

var Product = mongoose.model("Product", productSchema, "products");

module.exports = {
  findByLamda: async function (lamda) {
    var products = await Product.find(lamda);
    return products;
  },
  createByLamda: async function (lamda) {
    await Product.insertMany(lamda);
  },
  updateByLamda: async function (id, lamda) {
    await Product.updateOne(id, lamda);
  },
  deleteByLamda: async function (lamda) {
    await Product.deleteOne(lamda);
  },
};
