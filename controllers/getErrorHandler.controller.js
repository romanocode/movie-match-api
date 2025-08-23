
export function getErrorHandler(req, res, next) {
  try {
    throw new Error("💀 Error provocado desde el controlador");
  } catch (err) {
    next(err); // pasa el error al middleware errorHandler
  }
}

