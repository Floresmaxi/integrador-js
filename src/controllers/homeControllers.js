const { render } = require("ejs");
const path = require("path");
const fs = require("fs");

const pathJson = path.resolve(__dirname, "../data/product.json");
const productJson = fs.readFileSync(pathJson, "utf-8");
const product = JSON.parse(productJson);


let controller = {
    home: (req,res) => {
        res.render("home")
    },
    details: (req,res) => {
        res.render("details", {productos:product})
    },
    create: (req,res) => {
        res.render("create")
    },
    list: (req, res) => {
        res.render("list", {productos:product})
    },
    edit: (req, res) => {
        res.render("edit", {productos:product})
    }
};

module.exports = controller;

