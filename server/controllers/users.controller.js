const User = require("../models/users.model");
const { createSecretToken } = require("../utils/users.util");
const bcrypt = require("bcryptjs");
const validator = require("validator");

// Signup
module.exports.Signup = async (req, res, next) => {
  try {
    const { name, username, email, password } = req.body;

    // Input validation
    const errors = {};

    // Name validation
    if (!name || name.trim().length === 0) {
      errors.name = "Name is required";
    }

    // Username validation
    if (!username || username.trim().length === 0) {
      errors.username = "Username is required";
    }

    // Email validation
    if (!email || !validator.isEmail(email)) {
      errors.email = "Invalid email address";
    }

    // Password validation
    if (!password || password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const existingUser = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const user = await User.create({ name, username, email, password });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      sameSite: "none",
    });

    res
      .status(201)
      .json({ message: "User created successfully", success: true, user });
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      sameSite: "none",
    });
    res.json({ message: "Login successful", success: true });
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Logout
module.exports.Logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout successful", success: true });
};

// Get user
module.exports.GetUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
