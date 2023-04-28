const express = require("express");
const Category = require("../models/Category.model");

const router = express.Router();

router.get("/getAllCategory", async (req, res, next) => {
  try {
    const categories = await Category.find({});
    return res.status(200).send({ categories: categories });
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

module.exports = router;
