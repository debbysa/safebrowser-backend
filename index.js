const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("./config/database");

app.use(express.json());

app.use(cors());

// Using EJS template engine
app.set("", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static("public"));

app.use("/", require("./router/webPage403Router"));
app.use("/history", require("./router/historyRouter"));

app.listen(process.env.PORT || 3000, function() {
  console.log("server running on port 3000");
});
