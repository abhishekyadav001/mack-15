const port = process.env.PORT || 8080;
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connection = require("./config/db");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
// quiz routing for adding the database and getting the data
const quizRoute = require("./route/quiz.route");
app.use("/quiz", quizRoute);
app.use("/", (req, res) => {
  res.send("Home page");
});
app.listen(port, async () => {
  try {
    await connection();
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("listeneing port", port);
});
