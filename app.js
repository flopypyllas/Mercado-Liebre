const express = require("express");
const app = express();
const path = require ("path");
// ruta absoluta carpeta public
const publicPath = path.resolve(__dirname , "./public");
app.use (express.static (publicPath));
app.listen(3030, ()=>
    console.log("servidor corriendo en puerto 3030")
)

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});
