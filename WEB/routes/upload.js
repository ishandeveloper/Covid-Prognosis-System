// let users = [];
// var admin = require("firebase-admin");
// const { db } = require("../firebase");
// var serviceAccount = require("../firebase.json");

module.exports = function (app) {
  app.get("/upload", function (req, res) {
    res.render("upload.ejs", {});
  });
};
