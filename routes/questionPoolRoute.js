const express = require("express");
const QuestionPoolController = require("../controllers/QuestionPoolController");
const {moderator_auth} = require("../middlewares/authMiddleware");
// const { rs_auth } = require("../middleware/authMiddleware");
const QuestionPoolRouter = express.Router();

QuestionPoolRouter.post("/", QuestionPoolController.saveQPool);
QuestionPoolRouter.get("/:cid", moderator_auth ,QuestionPoolController.getQPoolById);

module.exports = QuestionPoolRouter;
