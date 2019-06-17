const mongoose = require("mongoose");

const historySchema = mongoose.Schema(
  {
    title: String,
    url: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", historySchema);
