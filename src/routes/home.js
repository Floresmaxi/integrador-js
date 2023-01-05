const express = require("express");
const router = express.Router();

const controller = require("../controllers/homeControllers");
const rutaIngresada = require("../middlewares/log")

router.get("/", rutaIngresada, controller.home );

module.exports = router;  