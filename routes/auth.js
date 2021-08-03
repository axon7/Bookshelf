const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/register", async (req, res) => {
  let { username, email, password } = req.body;
  try {
    let user = await User.findOne({
      username: username,
    });

    if (user) {
      return res.sendStatus(400).json({
        msg: "Username is taken",
      });
    }

    let newUser = new User({
      username,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();

    //hash user id
    const payload = {
      user: {
        id: newUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "36000" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("dupa");
    res.json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    res.send("działa GET /");
  } catch (err) {
    console.error("dupa");
    res.send(500).send("server error");
  }
});

module.exports = router;
