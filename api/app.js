require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");

const app = express();

app.use(express.json());
app.use(cors());

const { PORT } = process.env;

app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log("VIDEOGAME API IS READY IN PORT" + PORT);
});
dbConnect();
