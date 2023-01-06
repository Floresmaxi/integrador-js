const { Schema, model, mongo} = require("mongoose");
const mongooseDelete = require("mongoose-delete")

const Product =  new Schema ({

    name: {
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    brand:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    imag:{
        type: String,
        require: true
    }


})
Product.plugin(mongooseDelete, {overrideMethods: "all"})

module.exports = model("Product", Product)