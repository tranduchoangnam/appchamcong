const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const moment = require("moment");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  res.render("staffs/index");
});
router.post("/", async (req, res) => {
  try {
    const result = await prisma.staff.findUnique({
      where: {
        id: parseInt(req.body.id),
      },
    });
    if (result != null) res.render("staffs/search", { result: result });
    else res.send("Not Found");
  } catch {
    res.send("Not Found");
  }
});
router.get("/all", async (req, res) => {
  const all = await prisma.staff.findMany();
  res.render("staffs/all", { all: all });
});
router.delete("/all", async (req, res) => {
  const delAllStaff = await prisma.staff.deleteMany();
  res.redirect("/staffs/all");
});

router.delete("/:id", async (req, res) => {
  try {
    const afterDelStaff = await prisma.staff.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.redirect("/staffs/all");
  } catch {
    res.redirect("/staffs/all");
  }
});

router.get("/new", (req, res) => {
  res.render("staffs/new");
});

router.post("/new", async (req, res) => {
  try {
    const newStaff = await prisma.staff.create({
      data: {
        id: parseInt(req.body.id),
        name: req.body.name,
      },
    });
    res.redirect("/staffs/new");
  } catch {
    res.redirect("/staffs/new");
  }
});

module.exports = router;
