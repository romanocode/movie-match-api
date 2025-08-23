import { Router } from "express";
import { getAllMovies } from "../controllers/getAllMovies.controller.js";
import { getRating } from "../controllers/getRating.controller.js";
import { getErrorHandler } from "../controllers/getErrorHandler.controller.js";
import { getTop10Movies } from "../controllers/getTop10Movies.controller.js";
import { getMoviesByGenre } from "../controllers/getMoviesByGenre.controller.js";
import { getMovieByTitle } from "../controllers/getMovieByTitle.controller.js";

export const api = Router();

/**
 * @swagger
 * tags:
 *   name: Películas
 *   description: Endpoints para gestionar películas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: The Shawshank Redemption
 *         genre:
 *           type: string
 *           example: Drama
 *         rating:
 *           type: number
 *           format: float
 *           example: 9.3
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Obtener todas las películas
 *     tags: [Películas]
 *     responses:
 *       200:
 *         description: Lista de todas las películas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
api.get("/movies", getAllMovies);

/**
 * @swagger
 * /rating:
 *   get:
 *     summary: Obtener películas con rating mayor o igual a 9.3
 *     tags: [Películas]
 *     responses:
 *       200:
 *         description: Lista de películas con alto rating
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
api.get("/rating", getRating);

/**
 * @swagger
 * /error:
 *   get:
 *     summary: Generar un error de prueba
 *     tags: [Películas]
 *     responses:
 *       500:
 *         description: Error intencional
 */
api.get("/error", getErrorHandler);

/**
 * @swagger
 * /top10:
 *   get:
 *     summary: Obtener el top 10 de películas mejor valoradas
 *     tags: [Películas]
 *     responses:
 *       200:
 *         description: Lista con las 10 películas más valoradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
api.get("/top10", getTop10Movies);

/**
 * @swagger
 * /genre/{genre}:
 *   get:
 *     summary: Obtener películas por género
 *     tags: [Películas]
 *     parameters:
 *       - in: path
 *         name: genre
 *         schema:
 *           type: string
 *         required: true
 *         description: Género de la película (ej. horror)
 *     responses:
 *       200:
 *         description: Lista de películas del género indicado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *       404:
 *         description: No se encontraron películas
 */
api.get("/genre/:genre", getMoviesByGenre);

/**
 * @swagger
 * /title/{title}:
 *   get:
 *     summary: Buscar películas por título
 *     tags: [Películas]
 *     parameters:
 *       - in: path
 *         name: title
 *         schema:
 *           type: string
 *         required: true
 *         description: Parte o nombre completo del título
 *     responses:
 *       200:
 *         description: Lista de películas que coinciden
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *       404:
 *         description: No encontrada
 */
api.get("/title/:title", getMovieByTitle);
