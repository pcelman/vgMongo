const express = require("express");
const router = express.Router();

const { getGenres } = require("../utils/getGenres");
const { saveGenreDb, showGenresDb } = require("../controllers/genre");



router.get("/", showGenresDb);

router.post("/", getGenres, saveGenreDb);//en esta ruta se traen los generos


module.exports = router;
