import fs from "fs";

export function getRating(req, res) {
   try {
      const data = fs.readFileSync("./data/movie.json", "utf8");
      const movies = JSON.parse(data);

      const moviesTop = movies.filter((movie) => movie.imdb_rating >= 9.3);
      res.json(moviesTop);
   } catch (error) {
      res.status(500).json({
         error: "Internal Server Error",
      })
   }
}