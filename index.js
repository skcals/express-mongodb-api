const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const users = require("./routes/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("useFindAndModify", false);
mongoose.connect(
  "mongodb://localhost/restful",
  { useNewUrlParser: true }
);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected..");
});

app.get("/", (req, res) => {
  res.send("<a href='/api/users'>http://localhost:3000/api/users</a>");
});

// all api routes

app.use("/api/users", users);

// app listen
app.listen(3000, () => console.log("app is running on port 3000..."));
