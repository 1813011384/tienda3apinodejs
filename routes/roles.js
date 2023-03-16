const Rol = require("../models/rol");

const router= require("express").Router();

router.get("/", async function(req, res){
    const roles= await Rol.find();
    res.status(200).send(roles);
});

module.exports= router;