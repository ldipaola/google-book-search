// Requiring our models and passport as we've configured it
const router = require("express").Router();
const db = require("../models");
const ObjectId = require("mongodb").ObjectId;

router.get("/api/books", async (req, res) => {
  await db.Book.find({}).then((books) => {
  res.json({books})
}).catch((err) => console.log(err));
});



router.post("/api/addBook", async (req, res) => {
  const { title, authors, description, image, link } = req.body;
  await db.Book.create({
    title: title,
    authors: authors,
    description: description,
    image: image,
    link: link
  })
    .then((book) => {
      res.json(book);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
