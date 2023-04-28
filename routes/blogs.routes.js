const express = require("express");
const Blogs = require("../models/Blogs.model");

const router = express.Router();

router.get("/getAllBlogs", async (req, res, next) => {
  try {
    const blogs = await Blogs.find({});
    return res.status(200).send({ blogs: blogs });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/getFeaturedBlogs", async (req, res, next) => {
  try {
    const featuredBlogs = await Blogs.find({ isFeatured: true });
    return res.status(200).send({ featuredBlogs: featuredBlogs });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/getAllBlogs/:category", async (req, res, next) => {
  try {
    const { category } = req.params;
    const blogs = await Blogs.find({ category: category });
    if (!blogs || blogs.length == 0) {
      return res.status(500).send({ message: "No blogs Found!" });
    }
    return res.send({ blogs: blogs });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/getBlog/:blogId", async (req, res, next) => {
  try {
    const { blogId } = req.params;
    const blog = await Blogs.findOne({ _id: blogId });
    return res.status(200).send({ blog: blog });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
