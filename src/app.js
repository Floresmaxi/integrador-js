const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));


const home = require("./routes/home");
app.use("/home", home);

app.use((req, res, next) => {
    res.status(404).render("404-page");
    next();
});

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));