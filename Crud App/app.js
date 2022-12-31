const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
const port = 3001;
const url = "mongodb://127.0.0.1/myDatabase";

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => {
  console.log("Connected with MongoDB ...");
});

//Middleware to parse to JSON
app.use(express.json());

//Middle Ware to remove CORS Errors
app.use(cors())

//Demo Router to Fetch Person Details!
const demoRouter = require("./routes/credentials");
app.use("/persons", demoRouter);

const resultRouter = require("./routes/results");
app.use("/results", resultRouter);

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
