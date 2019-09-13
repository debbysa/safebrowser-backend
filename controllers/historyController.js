const History = require("../models/History");

module.exports = {
  index: function(req, res) {
    History.find().then(function(rows) {
      res.json(rows);
    });
  },
  details: function(req, res) {
    History.findOne({ pluginCode: req.params.pluginCode }, function(err, rows) {
      if (err) return console.error(err);
      res.json(rows);
    });
  },

  //   // return a list of retailers belonging to the category
  //  app.get('/data/retailer_list/:category', function(req, res) {
  //   //pass in the category param (the unique ID), and use that to do our retailer lookup
  //   Category.findOne({ _id: req.params.category }, function(err, data) {
  //     if (err) return console.error(err);
  //     res.json(data)
  //   });

  store: function(req, res) {
    History.create(req.body).then(function(row) {
      res.json(row);
    });
  },
  update: function(req, res) {
    History.findByIdAndUpdate(
      req.params.pluginCode,
      { $set: req.body },
      { new: true }
    ).then(function(row) {
      res.json(row);
    });
  },
  delete: function(req, res) {
    History.findByIdAndDelete(req.params.pluginCode).then(function(row) {
      res.json(row);
    });
  }
};
