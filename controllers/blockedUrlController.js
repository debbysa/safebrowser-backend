const BlockedUrl = require("../models/BlockedUrl");

module.exports = {
  index: function(req, res) {
    BlockedUrl.find().then(function(rows) {
      res.json(rows);
    });
  },

  store: function(req, res) {
    BlockedUrl.create(req.body).then(function(row) {
      res.json(row);
    });
  },

  update: function(req, res) {
    BlockedUrl.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).then(function(row) {
      res.json(row);
    });
  },

  delete: function(req, res) {
    BlockedUrl.findByIdAndDelete(req.params.id).then(function(row) {
      res.json(row);
    });
  },

  details: function(req, res) {
    BlockedUrl.findOne({ pluginCode: req.params.pluginCode }, function(
      err,
      rows
    ) {
      if (err) return console.error(err);
      res.json(rows);
    });
  }
};
