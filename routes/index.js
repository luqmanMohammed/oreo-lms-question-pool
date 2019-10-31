const express = require("express");
const QuestionPoolRouter = require("./questionPoolRoute");
const IndexRouter = express.Router();

// auth/health
IndexRouter.get("/health", (req, res) => {
  res.json({
    health: "active"
  });
});


module.exports = IndexRouter;
