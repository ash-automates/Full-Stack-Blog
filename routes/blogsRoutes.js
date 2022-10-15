const Blog = require("../models/blog");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

router.post("/", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.render("details", { title: "Blog Details", blog: result });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.delete("/:id", (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({ redirects: "/blogs" });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
