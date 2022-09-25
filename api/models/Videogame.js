const { Schema, model } = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const VideogameSchema = new Schema(
  {
    name: {
      type: String,
    },
    videogameId: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    released: {
      type: String,
    },
    description: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    platforms: [
      {
        type: String,
        require: true,
      },
    ],
    image: {
      type: String,
    },
    custom: {
      type: Boolean,
      default: false,
    },
    genres: [
      {
        type: Schema.Types.ObjectId,
        ref: "Genre",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

VideogameSchema.plugin(mongooseDelete, { overrideMethods: "all" });
const VideogameModel = model("Videogame", VideogameSchema);

module.exports = VideogameModel;
