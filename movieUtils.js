//fs: file system 

const fs = require("fs").promises; // sintaxis commonJS (FORMA DE IMPORTAR FUNCIONES)

function parseCsvLineToObject(line){
    const colums = line.split(',');
    return{
        id:       colums [0],
        title:    colums [1],
        year:     colums [2],
        genre:    colums [3],
        director: colums [4],
    };
}



async function getMovieByTitle (title) {
    try {

    const data = await fs.readFile('data/movie.csv', 'utf8')
     const lines = data.split('\n'); // Arreglo de lineas

    const matchMovie = lines.find(line => line.includes(title));

    if (!matchMovie) {
       console.log("💢 No se encontro la pelicula" + title);
    return null;
                     }
                     return parseCsvLineToObject(matchMovie);
    } catch (err) {
        console.error('Error reading the CSV file' , err);
        return null;
    }
    
    
 }

    

module.exports = {
    getMovieByTitle
}