const jwt= require("jsonwebtoken");

const verifytoken= function(req, res, next){
    const token= req.cookies.accesstoken;
    jwt.verify(token, process.env.JWT_CLAVE, function(error, payload){
        if(error){
            return res.status(500).send(error);
        }else{
            req.idusuario= payload.idusuario;
            req.rol= payload.rol;
            next();
        }
    });
}

module.exports= verifytoken;