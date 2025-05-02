const express = require("express");
const cors = require("cors");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", quizRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Quiz API" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
