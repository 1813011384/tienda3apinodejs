const Categoria = require("../models/categoria");

const router= require("express").Router();

router.get("/", async function(req, res){
    const categorias= await Categoria.find();
    res.status(200).send(categorias);
});

module.exports= router;