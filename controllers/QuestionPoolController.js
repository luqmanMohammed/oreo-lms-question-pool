const QuestionPool = require("../models/QuestionPoolSchema");
class QuestionPoolController {
  async saveQPool(req, res, next) {
    const { CID , questions } = req.body;

    try {
      const isDuplicate = await QuestionPool.find({ CID });
      if (isDuplicate.length !== 0) {
        return res.status(400).send("Duplicate CID");
      }
      const newQuestionPool = new QuestionPool({
        CID,
        questions
      });
      await newQuestionPool.save();
      return res.status(201).send("Created");
    } catch (e) {
      console.error(e);
      return res.status(500).send("System Error. Contact Support");
    }
  }
}

module.exports = new QuestionPoolController();
