const mongoose= require("mongoose");

const personaSchema= mongoose.Schema({
    nombres: {type: String, required:true},
    apellidos: {type: String, required:true},
    telefono: {type: Number, required:true},
    imagen: {type: String, default: null},
    idrol: {type: mongoose.Types.ObjectId, required:true}
}, {timestamp: true});

module.exports= mongoose.model("Persona", personaSchema);