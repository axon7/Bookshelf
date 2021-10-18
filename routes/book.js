const express = require("express");
const router = express.Router();
const User = require("../model/User");
const Book = require("../model/Book");
// const { book } = require("../client/src/store/book.module");

require("dotenv").config();

router.post("/add", async (req, res) => {
  try {
    const { _id, user, addedToReadingList, isFinished, volumeInfo } = req.body;
    const book = new Book({
      _id,
      volumeInfo,
      user,
      addedToReadingList,
      isFinished,
    });

    // TODO if book exists then only change status

    book.save().then((data) => console.log(data));
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.get("/reading-list", async (req, res) => {
  const { userId } = req.query;
  // console.log(userId);
  try {
    const readingList = await Book.find({ user: userId }).exec();
    res.json(readingList);
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
