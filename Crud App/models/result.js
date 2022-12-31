const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Result", resultSchema);
