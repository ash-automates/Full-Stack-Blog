const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

// settings
const app = express();
app.set("view engine", "ejs");
app.listen(8000);
app.use(express.static("public"));
app.use(morgan("dev"));

const mongoDB = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@cluster0.4p3upij.mongodb.net/?retryWrites=true&w=majority`;
app.get("/", (req, res) => {
  const data = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs: data });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
