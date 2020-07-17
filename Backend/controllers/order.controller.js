var Order = require("../models/order.model");

module.exports = {
  find: async function (req, res) {
    var id = req.params.id;
    var Orders = await Order.findByLamda({ _id: id });
    res.json(Orders);
  },
  listOrder: async function (req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 3;
    var start = (page - 1) * perPage;
    var end = page * perPage;
    var Orders = await Order.findByLamda();
    res.json(Orders.slice(start, end));
  },
  postCreate: async function (req, res, next) {
    var entity = {
      products: req.body.products,
      customerId: req.body.customerId,
      receiver: req.body.receiver,
      destination: req.body.destination,
      deliveryDate: req.body.deliveryDate,
      receiptDate: req.body.receiptDate,
      status: "delivery",
    };
    try {
      await Order.createByLamda(entity);
      res.send("Create Order successfully");
    } catch (error) {
      next(error);
    }
  },
  postUpdate: async function (req, res, next) {
    var id = req.params.id;
    var entity = {
      products: req.body.products || "",
      customerId: req.body.customerId || "",
      receiver: req.body.receiver || "",
      destination: req.body.destination || "",
      deliveryDate: req.body.deliveryDate || "",
      receiptDate: req.body.receiptDate || "",
      status: req.body.status || "",
    };
    for (var item in entity) {
      if (entity[item] === "") {
        delete entity[item];
      }
    }
    try {
      await Order.updateByLamda({ _id: id }, entity);
      res.send("Update Order successfully");
    } catch (error) {
      next(error);
    }
  },
  delete: async function (req, res) {
    var id = req.params.id;
    var entity = {
      isDeleted: true,
    };
    await Order.updateByLamda({ _id: id }, entity);
    res.send("Delete Order successfully");
  },
};
