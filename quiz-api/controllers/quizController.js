const fs = require("fs");
const path = require("path");

exports.getSubjects = (req, res) => {
  const dataDir = path.join(__dirname, "../data");
  const files = fs.readdirSync(dataDir).map(file => file.replace(".json", ""));
  res.json(files);
};

exports.getQuestionsBySubject = (req, res) => {
  const subject = req.params.subject.toLowerCase();
  const filePath = path.join(__dirname, `../data/${subject}.json`);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Subject not found" });
  }
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
};
