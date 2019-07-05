const History = require("../models/History");

module.exports = {
  index: function(req, res) {
    History.find().then(function(rows) {
      res.json(rows);
    });
  },
  store: function(req, res) {
    History.create(req.body).then(function(row) {
      res.json(row);
    });
  }
};
