
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

// Connect Database
connectDB();

// Check MongoDB Connection State
setInterval(() => {
  console.log(
    "Mongo State:",
    mongoose.connection.readyState
  );
}, 5000);

// Middleware
app.use(cors());
app.use(express.json());

app.post("/test-register", (req, res) => {
  res.json({
    message: "TEST REGISTER OK"
  });
});

// Routes
console.log("AUTH ROUTES OBJECT:", authRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Employee API Running");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.post("/xyz123", (req, res) => {
  res.json({
    message: "XYZ WORKING"
  });
});

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});