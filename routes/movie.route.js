const express = require("express");
const Movie = require("../models/movie.model.js");
const router = express.Router();
const {getMovies, getMovie, createMovie,updateMovie, deleteMovie} = require('../controllers/movie.controller.js')


router.get('/', getMovies);

router.get("/:id", getMovie);

router.post("/", createMovie);

//update a movie
router.put("/:id", updateMovie);

//delete a movie
router.delete("/:id", deleteMovie);

module.exports = router;