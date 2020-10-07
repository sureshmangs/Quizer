const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    quizid: {
        type: Number
    },
    type: {
        type: String
    },
    name: {
        type: String
    },
    duration: {
        type: String
    },
    numOfQuetions: {
        type: Number
    },
    questions: [{
        qid: Number,
        question: String,
        optA: String,
        optB: String,
        optC: String,
        optD: String,
        answer: String
    }]

}, {
    timestamps: true
});

const Quiz = mongoose.model('quiz', quizSchema);

module.exports = Quiz;