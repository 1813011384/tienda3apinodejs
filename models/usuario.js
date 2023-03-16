const mongoose= require("mongoose");

const usuarioSchema= mongoose.Schema({
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    idpersona: {type: mongoose.Types.ObjectId, required: true}
}, {timestamp: true});

module.exports= mongoose.model("Usuario", usuarioSchema);