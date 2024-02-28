const express = require("express");
const app = express();
const path = require ("path");

const PORT = process.env.PORT || 3000

// ruta absoluta carpeta public
const publicPath = path.resolve(__dirname , "./public");
app.use (express.static (publicPath));
app.listen(PORT, ()=>
    console.log(`servidor corriendo en puerto ${PORT}`)
)

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});
