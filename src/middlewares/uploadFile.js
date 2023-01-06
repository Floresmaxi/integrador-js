const path = require("path")
const multer = require("multer");

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname);
        const randomName = Date.now() + fileExtension;
        cb(null, randomName);
    }
})
const upload = multer({
    storage: multerStorage,
    fileFilter: function (req, file, cb) {
        //si la extension del archivo no es el esperado
        const fileExtension = path.extname(file.originalname);
        if (![".jpg", ".png", ".gif"].includes(fileExtension)) {
            return cb(null, false);
        }
        //si la extensión del archivo es el esperado
        cb(null, true)
    }
});

module.exports = upload