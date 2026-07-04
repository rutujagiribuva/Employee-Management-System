const express = require("express");

const router = express.Router();

console.log("Employee Routes Loaded");

const {
  addEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

// Test log
router.get("/", (req, res, next) => {
  console.log("EMPLOYEE ROUTE HIT");
  next();
}, getEmployees);

router.post("/", addEmployee);
router.get("/:id", getEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;