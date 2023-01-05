const { render } = require("ejs");
const path = require("path");
const fs = require("fs");

const pathJson = path.resolve(__dirname, "../data/product.json");
const productJson = fs.readFileSync(pathJson, "utf-8");
const products = JSON.parse(productJson);


let controller = {
    
    details: (req,res) => {
        let product = products.find(product => {
            return product.id == req.params.id
        })
        res.render("products/details", {producto:product});
    },
    list: (req, res) => {
        res.render("products/list", {productos:products});
    },
    edit: (req, res) => {
        let product = products.find(product => {
            return product.id == req.params.id
        })
        res.render("products/edit", {producto:product});
    },
    create: (req,res) => {
        res.render("products/create");
    },
    store: (req,res) => {
        if (!req.file) {
            return res.send("Oye, la extensión de la imagen debe ser .jpg, .png, .gif")
        };

        const lastProduct = products[products.length - 1];
        const newProduct = {
            id: lastProduct.id + 1,
            ...req.body,   
            imag: req.file.filename,
        };
        products.push(newProduct);
        fs.writeFileSync(pathJson, JSON.stringify(products, null, 2))
        return res.send("ok, viniste por post")
    }
};

module.exports = controller;

