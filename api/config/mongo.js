require("dotenv").config();
const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;
// CONEXION CON ATLAS
const dbConnect = () => {
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("**********CONEXION CORRECTA**********");
      } else {
        console.log("**********CONEXION ERROR**********");
      }
    }
  );
};

module.exports = dbConnect;