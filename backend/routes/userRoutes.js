const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.send("User route working");
});

// Add user
router.post("/add", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
