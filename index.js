const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", async (_req, res) => {
  const response = await fetch("https://status.github.com/api/status.json");
  const data = await response.json();

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

app.listen(port, () => console.log(`listening on port ${port}`));
