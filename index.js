// index.js
const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🎬 Movie Match API - MVC Version (estudiante)');
});

app.use('/movies', movieRoutes);

// Middleware de manejo de errores centralizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
