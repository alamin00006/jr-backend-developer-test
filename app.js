const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

const rentRoute = require("./routes/rent.route");

app.use("/api/v1/rent", rentRoute);

module.exports = app;
