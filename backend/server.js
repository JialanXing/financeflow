const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");

const expenseRoutes = require("./routes/expenseRoutes");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("FinanceFlow API running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});