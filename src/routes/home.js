const express = require("express");
const router = express.Router();

const controller = require("../controllers/homeControllers");
const rutaIngresada = require("../middlewares/log")

router.get("/", rutaIngresada, controller.home, );
router.get("/details", rutaIngresada, controller.details );
router.get("/create", rutaIngresada, controller.create );
router.get("/list", rutaIngresada, controller.list );
router.get("/edit",rutaIngresada,controller.edit)


module.exports = router; 