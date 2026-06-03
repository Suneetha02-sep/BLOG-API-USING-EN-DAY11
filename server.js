const express = require("express");

const app = express();

const logger = require("./middleware/logger");

const postRoutes = require("./routes/postRoutes");

app.use(express.json());

app.use(logger);

app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blog API Running Successfully");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});