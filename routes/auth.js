const router= require("express").Router();
const Usuario= require("../models/usuario.js");
const Persona= require("../models/persona.js");
const Rol= require("../models/rol.js");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");

router.post("/register", async function(req, res){

    const newpersona= new Persona({ nombres: req.body.nombres, apellidos: req.body.apellidos, telefono: req.body.telefono, imagen: req.body.imagen, idrol: req.body.idrol });
    const newpers= await newpersona.save();

    const newuser= new Usuario({ email: req.body.email, password: bcrypt.hashSync(req.body.password, 5).toString(), idpersona: newpers._id });
    await newuser.save();

    res.status(200).send("Usuariopersona creado.");
});

router.post("/login", async function(req, res){
    const email= req.body.email;
    const password= req.body.password;

    try {
        let u= await Usuario.findOne({ email: email });
        let pers= await Persona.findOne({ _id: u.idpersona });
        let rol= await Rol.findOne( { _id: pers.idrol } );

        if(u){
            if(bcrypt.compareSync(password, u.password)){
                const token= jwt.sign({ idusuario: u._id, rol: rol.rol }, process.env.JWT_CLAVE);
                u._doc.idusuario= u._id;
                delete u._doc._id;
                delete pers._doc._id;
                delete rol._doc._id;
                res.cookie("accesstoken", token, { httpOnly: true }).status(200).send({ ...u._doc, ...pers._doc, ...rol._doc });
            }else{
                res.status(500).send("Password invalido.");
            }
        }else{
            res.status(500).send("Email invalido.");
        }
    } catch (error) {
        return res.status(500).send("-1");
    }
    
    

    
});

router.post("/logout", function(req, res){
    res.clearCookie("accesstoken", { sameSite: "none", secure: true }). status(200).send("Logout successfully");
});

module.exports= router;