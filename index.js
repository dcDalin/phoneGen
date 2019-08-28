const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PhoneNumbers = require("./models");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.render("index", {
    phoneNumbers: PhoneNumbers
  });
});

app.post("/generate", (req, res) => {
  const howMany = req.body.howMany;

  while (PhoneNumbers.length < howMany) {
    var r = Math.floor(Math.random() * 1000000000);
    if (PhoneNumbers.indexOf(r) === -1) PhoneNumbers.push("+254 7" + r);
  }
  res.redirect("/");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.exports = app;
