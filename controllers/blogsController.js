const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "All Blogs", blogs: result });
    })
    .catch((error) => {
      console.log(error);
    });
};

const blog_details = (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.render("blogs/details", { title: "Blog Details", blog: result });
    })
    .catch((error) => {
      console.log(error);
    });
};

const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "Create a new blog" });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((error) => {
      console.log(error);
    });
};

const blog_delete = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({ redirects: "/blogs" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const blog_edit_get = (req, res) => {
  Blog.findById(req.params.id).then((result) => {
    res.render("blogs/edit", { title: "Edit Blog", blog: result });
  });
};

const blog_edit_put = (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body).then((result) => {
    res.json({ redirects: `/blogs/${req.params.id}` });
  });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_edit_get,
  blog_edit_put,
};
