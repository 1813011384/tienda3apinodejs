const mongoose= require("mongoose");

const productoSchema= mongoose.Schema({
    nombre: {type: String, required: true},
    imagen: {type: String, required: true},
    desc: {type: String, required: true},
    precio: {type: Number, required: true},
    idcat: {type: mongoose.Types.ObjectId, required: true}
}, {timestamp: true});

module.exports= mongoose.model("Producto", productoSchema);