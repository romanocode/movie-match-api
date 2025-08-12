/// =========================
// 📂 movieService.js
// Servicio para leer y buscar películas desde un archivo CSV
// =========================

// Importamos el módulo 'fs' (file system) de Node.js
// Usamos la versión con promesas para trabajar con async/await
const fs = require("fs").promises;

// =========================
// Función: parseCsvLineToObject
// Convierte una línea CSV en un objeto JavaScript con propiedades claras
// =========================
function parseCsvLineToObject(line) {
    // Dividimos la línea por comas para obtener las columnas
    const columns = line.split(',');

    // Retornamos un objeto con los datos de la película
    return {
        id:       columns[0],
        title:    columns[1],
        year:     columns[2],
        genre:    columns[3],
        director: columns[4],
        actors:   columns[5],
        plot:     columns[6],
        imdb_rating: columns[7],
        runtime_minutes: columns[8]
    };
}

// =========================
// Función: getMovieByTitle
// Busca una película por título en el archivo CSV
// =========================
async function getMovieByTitle(title) {
    try {
        // 1️⃣ Leer el archivo CSV en formato texto
        const data = await fs.readFile('data/movie.csv', 'utf8');

        // 2️⃣ Dividir el contenido por líneas (cada línea es una película)
        const lines = data.split('\n');

        // 3️⃣ Ignorar la primera línea (encabezados) y buscar coincidencia
        const movieLine = lines.slice(1).find(line => 
            line.toLowerCase().includes(title.toLowerCase())
        );

        // 4️⃣ Si no se encuentra la película
        if (!movieLine) {
            console.log("💢 No se encontró la película: " + title);
            return null;
        }

        // 5️⃣ Convertir la línea encontrada a un objeto y devolverlo
        return parseCsvLineToObject(movieLine);

    } catch (err) {
        console.error('❌ Error al leer el archivo CSV:', err);
        return null;
    }
}

// =========================
// Exportamos las funciones para que otros archivos puedan usarlas
// =========================
module.exports = {
    getMovieByTitle
};
