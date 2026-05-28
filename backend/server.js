const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const expenseRoutes = require("./routes/expenseRoutes");

const activityRoutes = require("./routes/activityRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(
  "/api/expenses",
  expenseRoutes
);

app.use(
  "/api/activities",
  activityRoutes
);

app.get("/", (req, res) => {
  res.send("FinanceFlow API");
});

const PORT =
  process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});