const mongoose = require("mongoose");

const historySchema = mongoose.Schema(
  {
    title: String,
    url: String
  },
  {
    timestamps: { createdAt: true, updateAt: false }
  }
);

module.exports = mongoose.model("History", historySchema);
