const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send("Error Caught! " + error);
  }
});

router.get("/:username", async (req, res) => {
  try {
    // const user = await User.findById({ id: req.params.id });
    const user = await User.find({ username: String(req.params.username) });
    res.json(user);
  } catch (error) {
    res.send(`No User found!` + error);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_type: req.body.user_type,
  });

  try {
    const value = await user.save();
    res.json(value);
  } catch (error) {
    res.send("Cannot Add User!" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    if (user == null) res.send("No User found!");

    user.username = String(req.body.username);
    user.password = String(req.body.password);
    user.first_name = String(req.body.first_name);
    user.last_name = String(req.body.last_name);
    user.user_type = String(req.body.user_type);
    const value = await user.save();
    res.send(value);
  } catch (error) {
    res.send("Cannot Update! User");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const value = await User.remove({ id: req.params.id });
    res.send(value);
  } catch (error) {
    res.send("Cannot Delete the User!");
  }
});

module.exports = router;
