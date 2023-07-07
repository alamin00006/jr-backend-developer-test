const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");

const verifyToken = require("../middleware/verifyToken");
router
  .route("/")
  .get(movieController.getMovies)
  .post(movieController.createMovie);
router.route("/:id").get(movieController.getMovieDetails);

module.exports = router;
