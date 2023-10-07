const {errorLogger, errorHandler, notFoundErrorHandler, ormErrorHandler} = require('../middlewares/errors.middleware');

const errorRoutes = (app) => {
    app.use(errorLogger); //mostramos el error por consola
    app.use(ormErrorHandler); //buscamos si el error es del ORM
    app.use(errorHandler); //errores personales
    app.use(notFoundErrorHandler); //mandamos 404 para rutas no encontradas
}

module.exports = errorRoutes;

