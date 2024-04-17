const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.routes"); //<=todas las rutas
const app = express(); //=> {}.get .post .use()

/* ------MIDDLEWARES---------------------------------------------------------- */
/* middleware para aceptar jsons */
app.use(express.urlencoded());
app.use(express.json());
/* ----------------------CORS----------------------------------------- */
/* Para aceptar peticiones */
app.use(cors());
/* -----------------------RUTAS------------- */
/* Para los endpoints */
app.use("/", routes); //localhost:3000/

module.exports = app;
