import { movies } from "../models/movie.model.js";

export function getTop10Movies(req, res) {
  // 1) Obtener las películas (función o array)
  const allMovies = typeof movies === "function" ? movies() : movies;

  // 2) Ordenar desc por rating (copiamos con slice() para no modificar el original)
  const top10 = allMovies
    .slice()
    .sort((a, b) => Number(b.imdb_rating) - Number(a.imdb_rating))
    .slice(0, 10);

  // 3) Responder
  res.json(top10);
}
