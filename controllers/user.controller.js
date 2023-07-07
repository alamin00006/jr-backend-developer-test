require("dotenv").config();
const User = require("../models/User");
const { generateToken } = require("../utilis/token");

exports.createUser = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        status: "fail",
        message: " Sorry Already Exist !",
      });
    }
    const result = await User.create(req.body);

    res.status(200).json({
      status: "success",
      message: "Thanks For Created Account",
      data: result,
      
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "user not Added",
      error: error.message,
    });
  }
};
exports.createLogin = async (req, res) => {
  //    console.log(req.body)
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        message: "please provide email and password",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "Sorry No Account Create !",
      });
    }

    const isValidPassword = user.comparePassword(password, user.password);
    if (!isValidPassword) {
      return res.status(403).json({
        status: "fail",
        message: "Sorry Your Password or Email Wrong",
      });
    }
    const token = generateToken(user);
    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "Thanks For Login",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Sorry No found Account",
      error: error.message,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const email = req?.user?.email;
    const user = await User.findOne({ email });
    const { password: pwd, ...others } = user?.toObject();
    res.status(200).json({
      status: "success",
      data: others,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Please Log in",
      error: error.message,
    });
  }
};

exports.allUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "no user found",
      error: error.message,
    });
  }
};
