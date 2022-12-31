const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (error) {
    res.send("Error Caught!" + error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // const person = await Person.findById({ id: req.params.id });
    const person = await Person.findOne({ id: req.params.id });
    res.json(person);
  } catch (error) {
    res.send(`No person found!` + error);
  }
});

router.post("/", async (req, res) => {
  const person = new Person({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    country: req.body.country,
    credit_card_number: req.body.credit_card_number,
  });

  try {
    const value = await person.save();
    res.json(value);
  } catch (error) {
    res.send("Error!" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const person = await Person.findOne({ id: req.params.id });

    if (person == null) res.send("No Person");
    person.first_name = String(req.body.first_name);
    const value = await person.save();
    res.send(person);
  } catch (error) {
    res.send("Cannot Update!");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // const value = await Person.findByIdAndDelete({ id: req.params.id });
    const value = await Person.remove({ id: req.params.id });
    res.send(value);
  } catch (error) {
    res.send("Cannot Delete the Person!");
  }
});

module.exports = router;
