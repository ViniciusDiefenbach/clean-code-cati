const { z } = require("zod");

const paramIdSchema = z.object({
  id: z.string().uuid(),
});

module.exports = {
  paramIdSchema,
};
