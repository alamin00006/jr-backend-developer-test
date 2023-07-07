const Movie = require("../models/Movie");
exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const result = await movie.save();
    res.status(200).json({
      status: "success",
      message: "Movie Create Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Sorry Something is Wrong",
      error: error.message,
    });
  }
};

exports.getMovies = async (req, res, next) => {
  try {
    const movieTotalCount = await Movie.countDocuments({});
    const page = parseInt(req.query?.page);
    const size = parseInt(req.query?.size);

    if (page || size) {
      const movies = await Movie.find({})
        .skip(page * size)
        .limit(size);

      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: {
          movies,
          movieTotalCount: movieTotalCount,
        },
      });
    } else {
      const movies = await Movie.find({});
      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: movies,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not found",
      error: error.message,
    });
  }
};

exports.getMovieDetails = async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findById(id);
    res.status(200).json({
      status: "success",
      message: "data get Success",
      data: movie,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not found",
      error: error.message,
    });
  }
};
