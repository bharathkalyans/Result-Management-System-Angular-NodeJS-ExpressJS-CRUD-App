const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "secretkey";

app.get("/", (req, res) => {
  res.json({
    message: "Hello Nigger",
  });
});

app.get("/greet", (req, res) => {
  res.send("Hello Nigger");
});

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    name: "Bharath",
    email: "bharath@mail.com",
  };

  jwt.sign({ user }, SECRET_KEY, { expiresIn: "1300s" }, (err, token) => {
    res.json({
      token: token,
      message: "Token creation Successfull",
    });
  });
});

app.post("/profile", verifyToken, (req, res) => {
  jwt.verify(req.token, SECRET_KEY, (err, authData) => {
    console.log(err);
    if (err) {
      res.json({ message: "Token Validation Failed" });
    } else {
      res.json({ message: "Token Succedded", authData });
    }
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({ message: "Token Not Sent" });
  }
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
