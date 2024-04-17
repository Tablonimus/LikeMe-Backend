const pg = require("pg");
const { Pool } = pg;

// ⚠ IMPORTO LA FUNCION DEL MODELO PARA SINCRONIZAR Y EVITAR MULTIPLES NEW SEQUELIZE EN CADA ARCHIVO

/* LOCALHOST VARIABLES DE ENTORNO */
// const USER_DB = "postgres";
// const PASS_DB = "1234";
// const HOST_DB = "localhost";
// const PORT_DB = "5432";
// const NAME_DB = "likeme";

/* Inicio una instancia de POOL y conecto con la base de datos */
// const pool = new Pool({
//   connectionString: `postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`,
// });

/* RENDER VARIABLES DE ENTORNO */
const USER_DB = "likeme_7400_user";
const PASS_DB = "I7ExNdNcPb0c1G9ZpjwHL4SMeOt2rA9Z";
const HOST_DB = "dpg-cofv8mvsc6pc7382o8g0-a.oregon-postgres.render.com";
const PORT_DB = "5432";
const NAME_DB = "likeme_7400";

/* Inicio una instancia de POOL conecto con la base de datos */
const pool = new Pool({
  connectionString: `postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`,
  ssl: true,
});


/* Exporto pool */
module.exports = { pool };
