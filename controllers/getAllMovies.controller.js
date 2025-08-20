import fs from "fs";

export function getAllMovies(req, res) {
   try {
      const data = fs.readFileSync("./data/movie.json", "utf8");
      const movies = JSON.parse(data); // Parser el JSON a un objeto
      res.json(movies);
   } catch (error) {
      res.status(500).json({ error: "No se pudo leer el archivo de películas" });
   }
}