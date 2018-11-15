var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { required: true, type: String },
    age: { required: true, type: Number }
  },
  { collection: "urest" }
);

var user = mongoose.model("user", userSchema);
module.exports = user;
