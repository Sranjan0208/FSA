// routes/updateProfile.js
const express = require("express");
const router = express.Router();
const User = require("../models/users.model");

// Update user profile
router.put("/update-profile", async (req, res) => {
  try {
    const { userId, avatar, location } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user data
    user.avatar = avatar;
    user.location = location;

    // Save the updated user
    const updatedUser = await user.save();

    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
