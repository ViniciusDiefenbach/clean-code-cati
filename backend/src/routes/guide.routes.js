const { Router } = require("express");
const guideRouter = Router();
const { prisma } = require("../services/prisma.service");

guideRouter.get("/", async (_, res) => {
  const guides = await prisma.guideIdentifier.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });
  res.json(guides);
});

guideRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const guides = await prisma.guideDetails.findUnique({
    select: {
      id: true,
      format: true,
      content: true,
      createdAt: true,
    },
    where: {
      id,
    },
  });
  res.json(guides);
});



module.exports = {
  guideRouter,
};
