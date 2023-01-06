const path = require("path");
const express = require("express");
const app = express();

//Base de datos
const dbConnect = require("./config/mongo");

app.use(express.static(path.resolve(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use(express.urlencoded({ extended: true}));


const home = require("./routes/home");
app.use("/home", home);

const products = require("./routes/products");
app.use("/products", products);

app.use((req, res, next) => {
    res.status(404).render("404-page");
    next();
});


dbConnect()

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));