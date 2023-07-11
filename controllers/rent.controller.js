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
  try {
    const RentTotalCount = await Rent.countDocuments({});
    const page = parseInt(req.query?.page);
    const size = parseInt(req.query?.size);

    if (page || size) {
      const rents = await Rent.find({})
        .skip(page * size)
        .limit(size);

      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: {
          rents,
          RentTotalCount,
        },
      });
    } else {
      const rents = await Rent.find({});
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
