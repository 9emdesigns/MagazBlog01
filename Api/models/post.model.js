const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    author: { type: String, required: true },
  },
  { Timestamp: true }
);
module.exports = mongoose.model("Post", postSchema);
