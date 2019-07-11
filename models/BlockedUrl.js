const mongoose = require("mongoose");

const blockedUrlSchema = mongoose.Schema(
  {
    title: String,
    url: String
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

module.exports = mongoose.model("BlockedUrl", blockedUrlSchema);
