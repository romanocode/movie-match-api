import { movies } from "../models/movie.model.js";


export function getAllMovies(req, res) {
   try {
      const allMovies = movies();
      res.json(allMovies);
   
   } catch (error) {
      res.status(500).json({ error: "No se pudo leer el archivo de películas" });
   }
};