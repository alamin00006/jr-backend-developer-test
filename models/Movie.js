const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    director: {
      type: String,
      required: true,
      trim: true,
    },
    movieName: {
      type: String,
      required: true,
      trim: true,
    },
    releaseDate: {
      type: Number,
      required: true,
      trim: true,
    },
    runtime: {
      type: Number,
      required: true,
      trim: true,
    },
    actors: {
      type: String,
      required: true,
      trim: true,
    },
    producer: {
      type: String,
      required: true,
      trim: true,
    },
    tvShow: {
      type: Boolean,
      required: true,
      trim: true,
    },
    posterImage: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
