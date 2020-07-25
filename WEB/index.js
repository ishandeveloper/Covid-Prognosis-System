const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");
require("dotenv").config();

const csurfMiddleware = csurf({ cookie: true });

var port = process.env.PORT || 3000;
var posts = [];

// Initialize Express
const app = express();

// Setting up template engine
app.set("view engine", "ejs");

// bodyParser Initialized
app.use(bodyParser.json());
app.use(cookieParser());
app.use(csurfMiddleware);

app.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  next();
});

//Static Files Served
app.use("/public", express.static("public"));

// Login Route
require("./routes/login.js")(app);

app.post("/sessionLogin", (req, res) => {
  const idToken = req.body.idToken.toString();

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        const options = { maxAge: expiresIn, httpOnly: true };
        res.cookie("session", sessionCookie, options);
        res.end(JSON.stringify({ status: "success" }));
      },
      (error) => {
        res.status(401).send("UNAUTHORIZED REQUEST!");
      }
    );
});

app.get("/sessionLogout", (req, res) => {
  res.clearCookie("session");
  res.redirect("/login");
});

// Dashboard Route
require("./routes/dashboard.js")(app);

// upload Route
require("./routes/upload.js")(app);

app.listen(port, () => {
  console.log("Server Up At " + port);
});
