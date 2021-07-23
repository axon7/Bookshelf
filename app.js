const express = require("express");
const mongoose = require("mongoose");
const app = express();
const auth = require("./routes/auth");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("cannot connect");
  });

app.listen(3000, () => console.log("Example app listening on port 3000!"));
