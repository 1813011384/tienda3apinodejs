const verifytoken = require("../middlewares/jwt");
const Persona = require("../models/persona");

const router= require("express").Router();
const Usuario= require("../models/usuario.js");

router.delete("/:id",verifytoken, async function(req, res){
    const roldeusuarioactivo= req.rol;
    if(roldeusuarioactivo== "Administrador"){
        const u= await Usuario.findById({ _id: req.params.id });
        const pers= await Persona.findById( { _id: u.idpersona } );
        await Usuario.findByIdAndDelete({ _id: u._id });
        await Persona.findByIdAndDelete({ _id: pers._id });
        res.status(200).send("Usuariopersona borrado.");
    }else{
        res.status(500).send("No eres administrador");
    }
});

module.exports= router;