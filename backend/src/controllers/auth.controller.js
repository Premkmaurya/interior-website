const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findOne({
      email
    });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });
    await user.save();
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password");
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });
    res.status(200).json({
      message: "User logged in successfully",
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}

async function logoutUser(req, res) {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}

async function checkAuth(req, res) {
  try {
    const token = req.cookies && req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(200).json({ user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(401).json({ message: "Invalid token", error: error.message });
  }
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  checkAuth,
};
