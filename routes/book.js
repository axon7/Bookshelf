const express = require("express");
const router = express.Router();
const User = require("../model/User");
const Book = require("../model/Book");

require("dotenv").config();

router.post("/add", async (req, res) => {
  try {
    const book = new Book({
      book: "teststring",
      user: 1,
      addedToReadingList: true,
      isFinished: false,
    });

    book.save().then((data) => console.log(data));
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.post("/books", async (req, res) => {
  try {
    Book.find().then((data) => {
      res.send(data);
    });
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
