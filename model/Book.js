const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  volumeInfo: {
    type: Object,
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
