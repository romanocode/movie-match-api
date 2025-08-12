// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.listMovies); // GET /movies
router.get('/:id_or_name', movieController.getMovie); // GET /movies/:id_or_name

module.exports = router;
