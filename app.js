const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

const movieRoute = require("./routes/movie.route");
const userRoute = require("./routes/user.route");

app.use("/api/v1/movie", movieRoute);
app.use("/api/v1/user", userRoute);

module.exports = app;
