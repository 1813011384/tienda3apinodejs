const express= require("express");
const mongoose= require("mongoose");
const app= express();
const dotenv= require("dotenv");
const cookieparser= require("cookie-parser");
const cors= require("cors");

const AuthRoute= require("./routes/auth.js");
const UsersRoute= require("./routes/users.js");
const ProductosRoute= require("./routes/productos.js");
const RolesRoute= require("./routes/roles.js");
const CategoriasRoute= require("./routes/categorias.js");
const PasareladepagoRoute= require("./routes/pasareladepago.js");


dotenv.config();

app.use(express.json());
app.use(cookieparser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

mongoose.connect(process.env.MONGO).then(function(){
    return console.log("Database connected");
});

app.use("/api/auth", AuthRoute);
app.use("/api/users", UsersRoute);
app.use("/api/productos", ProductosRoute);
app.use("/api/roles", RolesRoute);
app.use("/api/categorias", CategoriasRoute);
app.use("/api/pasareladepago", PasareladepagoRoute);

app.listen(8800, function(){
    console.log("Server is running.");
});