const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const ReviewSchema = new mongoose.Schema(
  {
    forMoive: {
      type: ObjectId,
      ref: "Movie",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ["Approved", "Unapproved"],
      },
      default: "Unapproved",
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
