const express = require("express");
const QuestionPoolController = require("../controllers/QuestionPoolController");
const {moderator_auth} = require("../middlewares/authMiddleware");
const QuestionPoolRouter = express.Router();

QuestionPoolRouter.post("/", moderator_auth, QuestionPoolController.saveQPool);
QuestionPoolRouter.get("/:cid", moderator_auth ,QuestionPoolController.getQPoolById);

module.exports = QuestionPoolRouter;
