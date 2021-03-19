// build your `/api/resources` router here
// build your `/api/projects` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

// const validateProjectName = (req, res, next) => {
//   if (!req.body.project_name) {
//     res.status(404).json({ message: "project_name is required" });
//   } else {
//     next();
//   }
// };

router.get("/", (req, res, next) => {
  Resource.findAll()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  Resource.add(req.body)
    .then((resource) => {
      console.log(resource);
      res.json(resource[0]);
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
