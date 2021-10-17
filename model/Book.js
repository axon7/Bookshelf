const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Array,
    required: true,
  },
  imgPath: {
    type: String,
  },
  user: {
    type: Number,
    required: true,
  },
  addedToReadingList: {
    type: Boolean,
  },
  isFinished: {
    type: Boolean,
  },
});

module.exports = Book = new mongoose.model("book", BookSchema);
