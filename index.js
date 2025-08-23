import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { api } from "./routes/routesMovies.routes.js";
import { logRequest } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();
const port = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie Match API",
      version: "1.0.0",
      description: "API para gestionar películas 🚀",
    },
    servers: [
      { url: "http://localhost:3000" }
    ],
  },
  apis: ["./routes/routesMovies.routes.js"], // aquí indicas dónde buscar los comentarios JSDoc
};

const specs = swaggerJsdoc(swaggerOptions);


// Middlewares globales
app.use(cors());
app.use(express.json()); // importante para manejar JSON en requests
app.use(logRequest);

// Rutas
app.use(api);

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));


app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});

// Ruta raíz
app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

// Error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
