const { videoGameModel, genreModel } = require("../models");
//rec y res que hace algo en la db, lo que termino trayendo al front
//lo que va adentro de la ruta, reemplaza req, res

const getVideogamesDb = async (req, res) => {
  const { name } = req.query;
  try {
    const result = await videoGameModel.find({}).populate("genres");
    if (name) {
      let videoGameName = result.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );

      if (videoGameName.length === 0) {
        res.send({ msg: "No existe el videogame" });
      } else {
        res.send(videoGameName);
      }
    } else {
      res.send(result);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const saveVideogamesDb = async (req, res) => {
  try {
    const apiVideogames = req.body;
    console.log(apiVideogames);
    const result = await videoGameModel.create(apiVideogames);
    console.log(result);
    res.send(result);
    // res.send({ msg: "uwu" });
  } catch (error) {
    console.log(error.message);
  }
};

const getVideogameById = async (req, res) => {
  const { id } = req.params;
  const result = await videoGameModel.findById(id).populate("genres");
  //   const result = await videoGameModel.findOne({ videogameId });
  if (result) {
    res.send(result);
  } else {
    res.send(404).send({ msg: "error not found" });
  }
};
module.exports = { saveVideogamesDb, getVideogamesDb, getVideogameById };
