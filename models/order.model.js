var mongoose = require("mongoose");

var orderSchema = new mongoose.Schema(
  {
    products: [
      {
        item: String,
        amount: Number,
      },
    ],
    customerId: String,
    receiver: String,
    destination: String,
    deliveryDate: Date,
    receiptDate: Date,
    status: ["delivery", "received", "cancelled"],
    isDeleted: Boolean,
  },
  { versionKey: false }
);

var Order = mongoose.model("Order", orderSchema, "orders");

module.exports = {
  findByLamda: async function (lamda) {
    var orders = await Order.find(lamda);
    return orders;
  },
  createByLamda: async function (lamda) {
    await Order.insertMany(lamda);
  },
  updateByLamda: async function (id, lamda) {
    await Order.updateOne(id, lamda);
  },
  deleteByLamda: async function (lamda) {
    await Order.deleteOne(lamda);
  },
};
