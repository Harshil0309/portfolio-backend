const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    required: true,
    default: false,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("blogs", BlogSchema);
