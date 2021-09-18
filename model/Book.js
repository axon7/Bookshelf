const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  book: {
    type: String,
    required: true,
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
