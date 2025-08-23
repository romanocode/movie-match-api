import { movies } from "../models/movie.model.js";

export function getMovieByTitle(req, res) {
  try {
    const { title } = req.params;
    const allMovies = movies();

   
    const results = allMovies.filter((m) => 
      m.title.toLowerCase().includes(title.toLowerCase())
    );

    if (results.length === 0) {
      return res.status(404).json({ error: "No se encontraron películas con ese título" });
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

