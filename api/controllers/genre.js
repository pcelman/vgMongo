require("dotenv").config();
const { genreModel } = require("../models/index");
// const axios = require("axios");


const showGenresDb = async(req, res)=> {
    const result = await genreModel.find({})
    res.send(result)
}

const saveGenreDb = async (req, res) => {
  try {
    const apiGenres = req.body;
    const result = await genreModel.create(apiGenres)
    console.log(result);
    res.send(result)
    // res.send({ msg: "uwu" });
  } catch (error) {
    console.log(error.message);
  }
};


module.exports = { saveGenreDb, showGenresDb };
