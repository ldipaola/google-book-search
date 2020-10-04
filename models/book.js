const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: String,
    authors: [String],
    description: String,
    image: String,
    link: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
