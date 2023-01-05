const { render } = require("ejs");
const path = require("path");
const fs = require("fs");

const pathJson = path.resolve(__dirname, "../data/product.json");
const productJson = fs.readFileSync(pathJson, "utf-8");
const products = JSON.parse(productJson);

module.exports = {
    home: function (req, res) {
        res.render("home",{productos:products})
    },
}