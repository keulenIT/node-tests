const express = require("express");
var app = express();

app.get("/", (req, res) => {
  if (req.query.hasOwnProperty("id")) {
    res.status(404).send("Wrong path");
  } else {
    res.status(200).send("Hello world!");
  }
});

app.listen(3000);

module.exports = {
  app,
};
