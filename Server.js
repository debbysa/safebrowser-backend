const express = require("express");
const app = express();
require("./config/database");

app.use(express.json());

app.listen(3000, function() {
  console.log("server running at localhost:3000");
});
