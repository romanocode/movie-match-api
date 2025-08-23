import { movies } from "../models/movie.model.js";

export function getMoviesByGenre(req, res) {
  try {
    const { genre } = req.params;
    const allMovies = movies();

    const filtered = allMovies.filter((m) => 
      m.genre.toLowerCase().includes(genre.toLowerCase())
    );

    if (filtered.length === 0) {
      return res.status(404).json({ error: "No se encontraron películas de ese género" });
    }

    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
