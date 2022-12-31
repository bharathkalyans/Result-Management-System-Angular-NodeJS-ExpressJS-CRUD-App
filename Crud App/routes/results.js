const express = require("express");
const router = express.Router();
const Result = require("../models/result");

router.get("/", async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    res.send("Error Caught! " + error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // const result = await Person.findById({ id: req.params.id });
    const result = await Result.find({ id: req.params.id });
    res.json(result);
  } catch (error) {
    res.send(`No Result found!` + error);
  }
});

router.post("/", async (req, res) => {
  const result = new Result({
    id: req.body.id,
    name: req.body.name,
    dob: req.body.dob,
    score: req.body.score,
  });

  try {
    const value = await result.save();
    res.json(value);
  } catch (error) {
    res.send("Error!" + error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await Result.findOne({ id: req.body.id });
    if (result == null) res.send("No result found!");

    result.name = String(req.body.name);
    result.dob = String(req.body.dob);
    result.score = String(req.body.score);
    const value = await result.save();
    res.send(value);
  } catch (error) {
    res.send("Unable to Update the Result!");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const result = await Result.findOne({ id: req.params.id });
    if (result == null) res.send("No result found!");

    result.name = String(req.body.name);
    result.dob = String(req.body.dob);
    result.score = String(req.body.score);
    const value = await result.save();
    res.send(value);
  } catch (error) {
    res.send("Cannot Update! Result");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const value = await Result.remove({ id: req.params.id });
    res.send(value);
  } catch (error) {
    res.send("Cannot Delete the Result!");
  }
});

module.exports = router;
