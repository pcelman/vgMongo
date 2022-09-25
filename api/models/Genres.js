const { Schema, model } = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const GenreSchema = new Schema( //con schema se lo obliga a que reciba solo eso
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false, //versionado de mongo, recomendado en false
  }
);
GenreSchema.plugin(mongooseDelete, { overrideMethods: "all" }); //config borrado logico
const GenreModel = model("Genre", GenreSchema); //Crecion Modelo + Schema

module.exports = GenreModel;
