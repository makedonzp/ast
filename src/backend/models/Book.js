const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  videoUrl: { type: String },
  coverImage: { type: String },
  maxWidth: { type: Number },
  animation: { type: String },
  pictures: {
    first: { type: String },
    second: { type: String },
    third: { type: String },
  },
});

module.exports = mongoose.model("Book", BookSchema);
