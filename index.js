require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var mongoose = require("mongoose");

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });
var productRoutes = require("./routes/product.route");
var userRoutes = require("./routes/user.route");
var authRoutes = require("./routes/auth.route");
var adminRoute = require("./routes/admin.route");
var staffRoute = require("./routes/staff.route");
var orderRoutes = require("./routes/order.route");
var customerRoute = require("./routes/customer.route");

var authMiddleware = require("./middlewares/auth.middleware");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser("abcxyzasdsadasd"));
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/users", authMiddleware.requireAuth, userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/auth", authRoutes);

app.use("/admin", authMiddleware.requireAuth, adminRoute);
app.use("/staff", authMiddleware.requireAuth, staffRoute);
app.use("/customer", authMiddleware.requireAuth, customerRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
