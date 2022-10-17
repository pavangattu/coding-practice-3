const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let dat = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  response.send(`${dat}-${month}-${year}`);
});

module.exports = app;
