const Producto = require("../models/producto");

const router= require("express").Router();

router.get("/", async function(req, res){
    const n= req.query.n;
    const productos= n? await Producto.find().limit(n): await Producto.find();
    res.status(200).send(productos);
});

router.get("/find/:id", async function(req, res){//parece q con find
    const producto= await Producto.findById({ _id: req.params.id });
    res.status(200).send(producto);
});

router.get("/findbyidcat/:id", async function(req, res){
    const productos= await Producto.find({ idcat: req.params.id });
    res.status(200).send(productos);
});

router.post("/", async function(req, res){
    const producto= new Producto( req.body );
    producto.save();
    res.status(200).send("Producto creado");
});

module.exports= router;