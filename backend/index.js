require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const express = require("express");
const server = express();
const cors = require("cors");

const prisma = new PrismaClient();

server.use(express.json());
server.use(cors());

server.get("/guides", async (req, res) => {
  const guides = await prisma.guides.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });
  res.json(guides);
});

server.get("/guides/:id", async (req, res) => {
  const { id } = req.params;
  const guides = await prisma.guides.findUniqueOrThrow({
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      GuideHelpers: true,
    },
    where: {
      id,
    },
  });
  res.json(guides);
});

// server.post("/guides", async (req, res) => {
//   try {
//     const guide = await prisma.guides.create({
//       data: {
//         title: req.body.title,
//         description: req.body.description,
//         contentUri: req.body.contentUri,
//       },
//     });
//     res.json(guide);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Something went wrong");
//   }
// });

// server.post("/guide-helpers", async (req, res) => {
//   try {
//     const guideHelper = await prisma.guideHelpers.create({
//       data: {
//         type: req.body.type,
//         contentUri: req.body.contentUri,
//         guideId: req.body.guideId,
//       },
//     });
//     res.json(guideHelper);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Something went wrong");
//   }
// });

server.listen(3000, () => {
  console.log("Server is running...");
});
