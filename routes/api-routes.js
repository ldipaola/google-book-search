// Requiring our models and passport as we've configured it
const router = require("express").Router();
const db = require("../models");

router.get("/api/books", async (req, res) => {
  await db.Book.find({})
  .then(dbModel => res.json(dbModel))
  .catch((err) => console.log(err));
});


router.post("/api/books", async (req, res) => {
  const { title, authors, description, image, link } = req.body;
  await db.Book.create({
    title: title,
    authors: authors,
    description: description,
    image: image,
    link: link
  })
    .then((dbModel) => {
      res.json(dbModel);
    })
    .catch((err) => console.log(err));
});

router.get("/api/books/:id" , (req, res) => {
  db.Book.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.delete("/api/books/:id", (req, res) => {
  db.Book.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
