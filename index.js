import express from "express";
import {api} from './routes/routesMovies.routes.js';

const app = express(); 
const port = 3000;

app.use(api)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})