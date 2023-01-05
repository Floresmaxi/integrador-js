const { Schema, model} = require("mongoose");

const Product =  new Schema ({

    name: {
        type: String,
        require: true
    },
    price:{
        type: Number,
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


module.exports = model("Product", Product)