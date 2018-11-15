const express = require("express");
const router = express.Router();
const user = require("../models/user.model");

// get all users

router.get("/", (req, res) => {
  user.find().then(function(doc) {
    res.json(doc);
  });
});

// get user

router.get("/:id", (req, res) => {
  var id = req.params.id;
  user.findById(id).then(function(doc) {
    res.json(doc);
  });
});

// create user

router.post("/", (req, res) => {
  var { name, age } = req.body;
  var userdata = {
    name,
    age
  };
  var insData = new user(userdata);
  insData.save((err, suc) => {
    if (err) throw err;
    if (suc) res.send({ msg: "User Created..." });
  });
});

// update user

router.put("/:id", (req, res) => {
  var id = req.params.id;
  var newData = req.body;

  user.findByIdAndUpdate(id, newData, (err, result) => {
    if (err) throw err;
    res.json({ msg: "User Updated..." });
  });
});

// delete user

router.delete("/:id", (req, res) => {
  var id = req.params.id;

  user.findByIdAndDelete(id, (err, result) => {
    if (err) throw err;
    res.json({ msg: "User Deleted..." });
  });
});

module.exports = router;
