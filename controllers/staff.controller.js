var User = require("./user.controller");
var Product = require("./product.controller");

module.exports = {
  index: User.index,

  listUser: User.listUser,
  findById: User.findById,

  listProducts: Product.listProduct,
  findProduct: Product.findById,
  postCreateProduct: Product.postCreate,
  postUpdateProduct: Product.postUpdate,
  deleteProduct: Product.delete,
};
