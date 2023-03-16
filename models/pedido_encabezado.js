const mongoose= require("mongoose");

const pedido_encabezadoSchema= mongoose.Schema({
    total: {type: Number, required: true},
    idusuario: {type: mongoose.Types.ObjectId, required: true}
}, {timestamp: true});

module.exports= mongoose.model("Pedido_encabezado", pedido_encabezadoSchema);