const Rent = require("../models/Rent");
exports.createRent = async (req, res) => {
  try {
    const rent = new Rent(req.body);
    const result = await rent.save();
    res.status(200).json({
      status: "success",
      message: "Data Create Successfully",
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

exports.getAllRent = async (req, res, next) => {
  const query = req.query?.query;

  try {
    if (query === "Others") {
      return;
    }
    if (query === "All") {
      const rents = await Rent.find({});
      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: rents,
      });
    } else {
      const rents = await Rent.find({ name: query });
      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: rents,
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
