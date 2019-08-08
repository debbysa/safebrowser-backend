const mongoose = require("mongoose");

const historySchema = mongoose.Schema(
  {
    title: String,
    url: String,
    pluginCode: String
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

module.exports = mongoose.model("History", historySchema);
