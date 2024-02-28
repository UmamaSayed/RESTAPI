const mongoose = require('mongoose');


//movie schema

const MovieSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      summary: {
        type: String,
        required: true,
      },
},
{
    timestamps: true,
}
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;