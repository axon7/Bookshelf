const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    res.send("działa GET /");
  } catch (err) {
    console.error("dupa");
    res.send(500).send("server error");
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
