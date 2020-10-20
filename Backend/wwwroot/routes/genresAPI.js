const genres = require("../data/genres.json");
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Gets all genres
router.get("/", (req, res) => {
  res.json(genres);
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
