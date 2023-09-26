const { Router } = require("express");
const calendarRoutes = Router();
const { prisma } = require("../services/prisma.service");
const { paramIdSchema } = require("../schemas/shared/param-id.schema");

calendarRoutes.get("/", async (_, res) => {
  const calendars = await prisma.calendars.findMany();
  res.json(calendars);
});

module.exports = {
  calendarRoutes,
};
