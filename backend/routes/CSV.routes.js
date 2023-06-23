const express = require("express");
const { exportCSV } = require("../controllers/CSV.controller");

const exportCSVRouter = express.Router();

exportCSVRouter.get('/', exportCSV)


module.exports = { exportCSVRouter }