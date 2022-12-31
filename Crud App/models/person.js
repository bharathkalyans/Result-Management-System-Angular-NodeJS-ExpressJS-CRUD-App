const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  credit_card_number: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Person', personSchema);
