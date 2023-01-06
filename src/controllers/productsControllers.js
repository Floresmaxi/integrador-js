const path = require("path")
const fs = require("fs")

const Product = require("../data/models/Product");

let controller = {
    
    details: async (req,res) => {

        const product = await Product.findById(req.params.id)
        res.render("products/details", {producto:product});
    },
    list: (req, res) => {
        res.render("products/list", {productos:products});
    },
    edit: async (req, res) => {
        const product = await Product.findById(req.params.id)
        res.render("products/edit", {producto:product});
    },
    create: (req,res) => {
        res.render("products/create");
    },
    store: async (req,res) => {
        if (!req.file) {
            return res.send("Oye, la extensión de la imagen debe ser .jpg, .png, .gif")
        }
        await Product.create({...req.body, imag: req.file.filename})

        return res.redirect("/home");
    },
    delete: (req, res) => {
        Product.delete({_id: req.params.id}, (err, products) => {
            if (err) {
                return res.status(500).json({ error: err.message});
            }
            return res.redirect("/home");
        });
    },
    update: async (req,res) => {
            const productUpdate =  await Product.findByIdAndUpdate(req.params.id,req.body);
            return res.redirect("/home");
    }
};

module.exports = controller;

