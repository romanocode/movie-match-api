import { Router } from "express";
import { getAllMovies } from "../controllers/getAllMovies.controller.js";
import { getRating } from "../controllers/getRating.controller.js";


 export const api = Router();

api.get('/movies', getAllMovies);
api.get('/rating', getRating);