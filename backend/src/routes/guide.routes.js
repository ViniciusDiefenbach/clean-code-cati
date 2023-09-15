const { Router } = require("express");
const guideRoutes = Router();
const { prisma } = require("../services/prisma.service");
const { paramIdSchema } = require("../schemas/shared/param-id.schema");

guideRoutes.get("/", async (_, res) => {
  const guides = await prisma.guideIdentifiers.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });
  res.json(guides);
});

guideRoutes.get("/:id", async (req, res) => {
  const input = paramIdSchema.safeParse(req.params);
  if (!input.success) {
    return res.json({ error: input.error });
  }
  const { id } = input.data;

  const guides = await prisma.guideIdentifiers.findUnique({
    select: {
      id: true,
      title: true,
      description: true,
      created_at: true,
      guide_details: {
        select: {
          id: true,
          format: true,
          content: true,
        },
      },
    },
    where: {
      id,
    },
  });

  res.json(guides);
});

module.exports = {
  guideRoutes,
};
