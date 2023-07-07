const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  try {
    //    console.log(req.headers?.authorization)
    const token = req?.headers?.authorization?.split(" ")?.[1];
    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "Your are Not Logged in",
      });
    }
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "invalid token",
      error: error.message,
    });
  }
};
