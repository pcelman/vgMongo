require("dotenv").config();
const axios = require("axios");
//aqui cuando es algo repetitivo
// antes de irse a controllers hace de middlware y reemplaza req, res
//es una sola vez porque traigo los 100 de una vez, son cosas que voy a poder utilizar despues, como traer mas videojuegos

const { APIKEY } = process.env;
const getGenres = async (req, res, next) => {
  try {
    const genres = await axios.get(
      `https://api.rawg.io/api/genres?key=${APIKEY}`
    );
    const allGenres = genres.data.results.map((e) => ({//como no hay return, con los paretesis abrazando todo lo toma como un return implicito
      name: e.name
    }));
    req.body = allGenres;
    next();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { getGenres };
