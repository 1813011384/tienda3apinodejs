const mongoose= require("mongoose");

const pedido_detalleSchema= mongoose.Schema({
    cantidad: {type: Number, required: true},
    idproducto: {type: mongoose.Types.ObjectId, required: true},
    subtotal: {type: Number, required: true},
    idpe: {type: mongoose.Types.ObjectId, required: true}
}, {timestamp: true});

module.exports= mongoose.model("Pedido_detalle", pedido_detalleSchema);