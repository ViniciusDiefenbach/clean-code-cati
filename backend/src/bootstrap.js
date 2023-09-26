require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const { guideRoutes } = require("./routes/guide.routes");
const { calendarRoutes } = require("./routes/calendar.routes");

server.use(express.json());
server.use(cors());
server.use("/guide", guideRoutes);
server.use("/calendar", calendarRoutes);
// server.use(express.static("public")); -> Armazenamento de imagens de forma local

server.listen(3000, () => {
  console.log("Server is running...");
});
