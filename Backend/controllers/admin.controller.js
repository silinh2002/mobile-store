var User = require("./user.controller");
var Product = require("./product.controller");

module.exports = {
  index: User.index,

  listUser: User.listUser,
  findUser: User.findById,
  postCreateUser: User.postCreate,
  postUpdateUser: User.postUpdate,
  deleteUser: User.delete,

  listProducts: Product.listProduct,
  findProduct: Product.findById,
  postCreateProduct: Product.postCreate,
  postUpdateProduct: Product.postUpdate,
  deleteProduct: Product.delete,
};
