const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, min: 8, unique: true },
  password: { type: String, required: true },
});
module.exports = mongoose.model("User", userSchema);
