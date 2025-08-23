import fs from "fs";

export function movies() {
  try {
    const data = fs.readFileSync("./data/movie.json", "utf8");
    const movies = JSON.parse(data);

    return movies;
  } catch (error) {
    console.error("Error reading movie data:", error);
    return [];
  }
}
