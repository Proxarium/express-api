const { prisma } = require("../prisma/prisma-client");

const BrigadeController = {
  createBrigade: async (req, res) => {
    const { nomerBrigadi } = req.body;

    if (!nomerBrigadi) {
      return res.status(400).json({ error: "Все поля обязательны" });
    }

    try {
      const brigade = await prisma.brigade.create({
        data: {
          nomerBrigadi,
        },
      });

      res.json(brigade);
    } catch (error) {
      console.error("Create post error");

      res.status(500).json({ error: "Internal server error" });
    }
  },
  getAllBrigade: async (req, res) => {
    try {
      const allBrigade = await prisma.brigade.findMany();
      res.json(allBrigade);
    } catch (error) {
      console.error("GetAllBrigade error", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = BrigadeController;
