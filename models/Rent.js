const mongoose = require("mongoose");

const RentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    dayPrice: {
      type: Number,
      required: true,
      trim: true,
    },
    monthPrice: {
      type: Number,
      required: true,
      trim: true,
    },
    yearPrice: {
      type: Number,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Rent = mongoose.model("Rent", RentSchema);
module.exports = Rent;
