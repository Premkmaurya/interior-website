const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/auth.routes");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Update this to match your frontend URL
    credentials: true, // Allow cookies to be sent
  }),
);

app.use("/api/auth", authRoutes);

module.exports = app;
