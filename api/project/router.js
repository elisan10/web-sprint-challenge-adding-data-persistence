// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");

const router = express.Router();

const validateProjectName = (req, res, next) => {
  if (!req.body.project_name) {
    res.status(404).json({ message: "project_name is required" });
  } else {
    next();
  }
};

// const convertBoolean = (req, res, next) => {
//   if (req.body.project_completed === false) {
//     return req.body.project_completed === 0;
//   } else if (req.body.project_completed === true) {
//     return req.body.project_completed === 1;
//   } else if (!req.body.project_completed) {
//     return req.body.project_completed === null;
//   } else {
//     next();
//   }
// };

router.get("/", (req, res, next) => {
  Project.findAll()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

router.post("/", validateProjectName, (req, res, next) => {
  Project.add(req.body)
    .then((project) => {
      res.json(project);
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
