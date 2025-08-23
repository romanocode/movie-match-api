import { movies } from "../models/movie.model.js";


export function getRating(req, res) {
   try {
      const allMovies = movies();

      const moviesTop = allMovies.filter((movie) => movie.imdb_rating >= 9.3);
      res.json(moviesTop);
   } catch (error) {
      res.status(500).json({
         error: "Internal Server Error",
      })
   }
}