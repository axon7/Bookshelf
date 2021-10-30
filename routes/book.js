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

    const addedBook = await book.save();

    res.status(200).json(addedBook);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.post("/remove-from-reading-list", async (req, res) => {
  try {
    const { _id, user } = req.body;
    console.log(_id);
    console.log(user);
    console.log("req remove");
    const updatedBook = await Book.findOneAndUpdate(
      { user: user, _id: _id },
      { addedToReadingList: false }
    );

    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.get("/reading-list", async (req, res) => {
  const { userId } = req.query;
  // console.log(userId);
  try {
    const readingList = await Book.find({
      user: 1,
      addedToReadingList: true,
    }).exec();
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
