const mongoose= require("mongoose");

const categoriaSchema= mongoose.Schema({
    categoria: {type: String, required: true},
    imagen: {type: String, required: true}
}, {timestamp: true});

module.exports= mongoose.model("Categoria", categoriaSchema);