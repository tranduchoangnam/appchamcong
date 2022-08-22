const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/checkin", async (req, res) => {
  const allin = await prisma.checkIn.findMany();
  res.render("checkin", { allin: allin });
});
router.get("/checkout", async (req, res) => {
  const allout = await prisma.checkOut.findMany();
  res.render("checkout", { allout: allout });
});
router.post("/", async (req, res) => {
  if (req.body.first == 1)
    try {
      const newIn = await prisma.checkIn.create({
        data: {
          staffId: parseInt(req.body.id),
          time: new Date().toISOString(),
        },
      });
      res.redirect("/");
    } catch {
      res.redirect("/");
    }
  else
    try {
      const newIn = await prisma.checkOut.create({
        data: {
          staffId: parseInt(req.body.id),
          time: new Date().toISOString(),
        },
      });
      res.redirect("/");
    } catch {
      res.redirect("/");
    }
});

module.exports = router;
