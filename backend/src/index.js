require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const { guideRouter } = require("./routes/guide.routes");

server.use(express.json());
server.use(cors());
server.use("/guide", guideRouter);

server.listen(3000, () => {
  console.log("Server is running...");
});
