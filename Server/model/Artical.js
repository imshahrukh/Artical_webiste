const mongoose = require("mongoose");

const Artical = new mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    readTime: {
      type: String,
      required: true,
    },
    //
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Artical", Artical);
