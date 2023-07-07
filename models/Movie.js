const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    director: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    movieName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    movieRelaesYear: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    tvShow: {
      type: Boolean,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
