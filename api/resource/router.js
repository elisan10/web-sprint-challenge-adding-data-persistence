// build your `/api/resources` router here
// build your `/api/projects` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {});

router.post("/", (req, res, next) => {});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    sageAdvice: "Hey, you can do this. You know how to read errors",
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;
