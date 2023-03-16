const mongoose= require("mongoose");

const rolSchema= mongoose.Schema({
    rol: {type: String, required:true},
}, {timestamp: true, collection: "roles"});

module.exports= mongoose.model("Rol", rolSchema);