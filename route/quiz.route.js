const express = require("express");
const quizModel = require("../model/quiz.model");
const quizRoute = express.Router();
quizRoute.get("/", async (req, res) => {
  try {
    const users = await quizModel.find();
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
});
quizRoute.post("/add", async (req, res) => {
  const { category, type, difficulty, question, correct_answer, incorrect_answers } = req.body;
  try {
    const quizes = await quizModel.create({
      category: category,
      type: type,
      difficulty: difficulty,
      question: question,
      correct_answer: correct_answer,
      incorrect_answers: incorrect_answers,
    });
    res.send(quizes);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = quizRoute;
