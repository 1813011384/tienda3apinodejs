const router= require("express").Router();
const Pedido_encabezado= require("../models/pedido_encabezado.js");
const Pedido_detalle= require("../models/pedido_detalle.js");


router.post("/realizarcompra", async function(req, res){

    //con mercado pago

    let total= 0;
    req.body.carrito.forEach(element => {
        total= total + element.cantidad * element.precio;
    });

    const usupersoactual= req.body.usupersoactual;
    //console.log(usupersoactual);

    try {
      
        const pe= new Pedido_encabezado({ total: total, idusuario: usupersoactual.idusuario });
        const newpe= await pe.save();

        req.body.carrito.forEach( async function(element){
            const pd= new Pedido_detalle({ cantidad: element.cantidad, idproducto: element._id, subtotal: element.cantidad * element.precio, idpe: newpe._id });
            const newpd= await pd.save();
        });

        res.status(200).send("Pedido encabezado creado y pedidos detalle creado");

    } catch (error) {
        console.log(error)
        res.status(500).send("-1");
    }

    
     
});

module.exports= router;