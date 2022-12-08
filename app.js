const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();
var googleTranslate = require("google-translate")(process.env.API_KEY);

const app = express();
app.use(bodyParser.json());
// app.use(express.static("public"));

app.post("/detect", (req, res) => {
  googleTranslate.detectLanguage(req.body.text, function (err, detection) {
    res.send({data:detection});
  });
});

app.post("/translate", (req, res) => {
  googleTranslate.translate(req.body.text, "ta", function (err, translation) {
    res.send({ data: translation.translatedText });
  });
});

const port = process.env.PORT || 3000;
const host = "0.0.0.0";

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
