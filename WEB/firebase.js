var admin = require("firebase-admin");

var serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://covid-prognosis-system.firebaseio.com",
});

const db = admin.firestore();

module.exports = { db: db, admin: admin };
