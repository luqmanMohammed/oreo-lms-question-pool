const mongoose = require("mongoose");
const QuestionPoolSchema = new mongoose.Schema({
    CID: {
        required: true,
        type: String,
        unique: true
    },
    questions: {
        required: true,
        type: Object
    }
});

const QuestionPool = mongoose.model("QuestionPool",QuestionPoolSchema);
module.exports = QuestionPool;