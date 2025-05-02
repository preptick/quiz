const express = require("express");
const router = express.Router();
const { getSubjects, getQuestionsBySubject } = require("../controllers/quizController");

router.get("/subjects", getSubjects);
router.get("/questions/:subject", getQuestionsBySubject);

module.exports = router;
