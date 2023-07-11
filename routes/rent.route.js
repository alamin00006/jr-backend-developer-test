const express = require("express");
const router = express.Router();
const rentController = require("../controllers/rent.controller");

router
  .route("/")
  .get(rentController.getAllRent)
  .post(rentController.createRent);

module.exports = router;
