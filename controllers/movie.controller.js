const Movie = require ('../models/movie.model');

const getMovies = async(req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

const getMovie = async (req, res) =>{
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        res.status(200).json(movie);
        
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};

const createMovie = async (req, res) => {
    try {
        // Check if all required fields are provided
        const { summary, img, name } = req.body;
        if (!summary || !img || !name) {
          return res.status(400).json({ message: "Please provide summary, img, and name for the movie." });
        }
    
        const movie = await Movie.create(req.body);
        res.status(201).json(movie); // Send the created movie back as response
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByIdAndUpdate(id, req.body);
        
        if (!movie) {
          return res.status(404).json({message: "Movie not found"});
        }
        const updatedMovie = await Movie.findById(id);
        res.status(200).json(updatedMovie);
        
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByIdAndDelete(id);
        
        if (!movie) {
          return res.status(404).json({message: "Movie not found"});
        }
    
        res.status(200).json({message: "Movie Deleted Successfully"});
        
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};



module.exports = {
    getMovies, 
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
};
