const express = require("express");
const app = express();
const server = require("http").Server(app);

app.use(express.json());

server.listen(3000, function() {
  console.log("server running at localhost:3000");
});
