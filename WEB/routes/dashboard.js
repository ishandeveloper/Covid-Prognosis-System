let users = [];
// var admin = require("firebase-admin");
const { db, admin } = require("../firebase");
var serviceAccount = require("../firebase.json");

async function getData() {
  users = [];

  await db
    .collection("patients")
    .get()
    .then((doc) => {
      doc.forEach((patient) => {
        if (patient.exists) {
          users.push(patient.data().name);
        }
      });
    });

  return users;
}

module.exports = function (app) {
  app.get("/dashboard", function (req, res) {
    // const sessionCookie = req.cookies.session || "";

    // admin
    //   .auth()
    //   .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    //   .then(() => {
    getData().then(() => {
      res.render("dashboard.ejs", {
        name: users,
      });
    });
    // })
    // .catch((error) => {
    // res.redirect("/login");
    // });
  });
};
