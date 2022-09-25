const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname; //la lectura delp path donde se encuentra el archivo
const removeExtension = (filenamne) => {
  //ej:(corses.js)===courses
  return filenamne.split(".").shift();
};

const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});
module.exports = router;
