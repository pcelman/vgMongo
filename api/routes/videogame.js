const express = require("express");
const router = express.Router();
const { getVideogameApi } = require("../utils/getVideogames");
const { saveVideogamesDb, getVideogamesDb, getVideogameById } = require("../controllers/videogame");



router.post("/apiVideogame", getVideogameApi, saveVideogamesDb);
router.get("/", getVideogamesDb)
router.get("/:id", getVideogameById)



module.exports = router;
