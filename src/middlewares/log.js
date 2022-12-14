const path = require("path");
const fs = require("fs");

const rutas = path.resolve(__dirname, "../tutas.txt");

module.exports = function(req, res, next) {
    let ruta = req.originalUrl;
    fs.appendFileSync(rutas, ruta + "\n", "utf-8")
    next();
}