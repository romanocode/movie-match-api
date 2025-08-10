console.log("⭐ Bienvenido a Movie Match")
console.log("============================")

const inputMovie = process.argv[2] ?? null;

if (!inputMovie) {
    console.log("💢 Falto el nombre de la pelicula");
    return;
}

console.log("✅ Pelicula a buscar: " + inputMovie);

// Buscar la película:


const { getMovieByTitle } = require ("./movieUtils.js");

(async () => {
    const movie = await getMovieByTitle(inputMovie);
    console.log(movie)
}) ();

