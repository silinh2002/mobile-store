var Product = require("../models/product.model");

module.exports = {
  find: async function (req, res) {
    var id = req.params.id;
    var users = await Product.findByLamda({ _id: id });
    res.json(users);
  },
  listProduct: async function (req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 3;
    var start = (page - 1) * perPage;
    var end = page * perPage;
    var products = await Product.findByLamda();
    res.json(products.slice(start, end));
  },
  postCreate: async function (req, res, next) {
    var entity = {
      name: req.body.name || "",
      trademark: req.body.trademark || "",
      description: req.body.description || "",
      type: req.body.type || "",
      imageUrl: req.body.imageUrl || "",
      price: req.body.price || "",
      status: true,
      isDeleted: false,
    };
    try {
      await Product.createByLamda(entity);
      res.send("Create product successfully");
    } catch (error) {
      next(error);
    }
  },
  postUpdate: async function (req, res, next) {
    var id = req.params.id;
    var entity = {
      name: req.body.name || "",
      trademark: req.body.trademark || "",
      description: req.body.description || "",
      type: req.body.type || "",
      imageUrl: req.body.imageUrl || "",
      price: req.body.price || "",
      status: true || "",
    };
    for (var item in entity) {
      if (entity[item] === "") {
        delete entity[item];
      }
    }
    try {
      await Product.updateByLamda({ _id: id }, entity);
      res.send("Update product successfully");
    } catch (error) {
      next(error);
    }
  },
  delete: async function (req, res) {
    var id = req.params.id;
    var entity = {
      isDeleted: true,
    };
    await Product.updateByLamda({ _id: id }, entity);
    res.send("Delete product successfully");
  },
};
