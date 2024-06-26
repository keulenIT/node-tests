const express = require("express");
var app = express();
let loggedIn = false;

app.get("/", (req, res) => {
  if (req.query.hasOwnProperty("id") && loggedIn === false) {
    res.status(404).send("Wrong path");
  } else {
    res.status(200).send("Hello world!");
  }
});

app.get("/users", (req, res) => {
  res.status(200).send([
    { name: "Mathias", id: "1" },
    { name: "Luuk", id: "1" },
  ]);
});

app.get("/about", (req, res) => {
  res.status(404).send({
    error: "Page doesn't exist",
  });
});

app.listen(3000);

module.exports = {
  app,
};
