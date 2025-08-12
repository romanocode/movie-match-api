const http = require("http");
const { getMovieByTitle } = require("./movieUtils.js");

const server = http.createServer(async (req, res) => {
    if (req.url === "/") {
        // Elegir película aleatoria
        const randomTitles = ["Inception", "Interstellar", "The Godfather"];
        const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];
        const movie = await getMovieByTitle(randomTitle);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(movie, null, 2));
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
