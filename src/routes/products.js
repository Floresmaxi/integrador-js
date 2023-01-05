const express = require("express");
const router = express.Router();

//contoller
const controller = require("../controllers/productsControllers");

//middlewares
const rutaIngresada = require("../middlewares/log")
const uploadFile = require("../middlewares/uploadFile")


router.get("/list", rutaIngresada, controller.list );
router.get("/create", rutaIngresada, controller.create );
router.get("/edit/:id",rutaIngresada,controller.edit);  
router.get("/details/:id", rutaIngresada, controller.details );
router.post("/create", uploadFile.single("imag"), rutaIngresada, controller.store);



module.exports = router; 