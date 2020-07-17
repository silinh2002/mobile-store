var User = require("./user.controller");
var Product = require("./product.controller");

module.exports = {
  index: User.index,
  listUser: User.listUser,
  find: User.find,
  postCreateProduct: Product.postCreate,
  postUpdateProduct: Product.postUpdate,
  deleteProduct: Product.delete,
};
