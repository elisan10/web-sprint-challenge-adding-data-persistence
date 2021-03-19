// build your `/api/tasks` router here
// build your `/api/projects` router here
const express = require("express");
const Task = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Task.findAll()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Task.add(req.body)
    .then((task) => {
      res.json(task[0]);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    sageAdvice: "Hey, you can do this. You know how to read errors",
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;
