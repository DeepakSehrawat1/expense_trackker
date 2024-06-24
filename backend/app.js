const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const expenseRoutes = require("./routes/expense");
const purchaseRoutes = require("./routes/purchase");
const checkRoutes = require("./routes/checkstatus");
const premiumFeatureRoutes = require("./routes/premiumFeature");
const resetPasswordRoutes = require("./routes/resetpassword");

const app = express();

const dotenv = require("dotenv");
const helmet = require("helmet");

dotenv.config();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);

app.use(express.json());
app.use("/user", userRoutes);
app.use("/password", resetPasswordRoutes);
app.use("/expense", expenseRoutes);
app.use("/checkpremium", checkRoutes);
app.use("/purchase", purchaseRoutes);
app.use("/premium", premiumFeatureRoutes);

mongoose
  .connect(
    `mongodb+srv://deepaksehrawat150:xjzLV00a5pF0BXBd@cluster0.aqfclgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((result) => {
    app.listen(3000);
    console.log("Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
