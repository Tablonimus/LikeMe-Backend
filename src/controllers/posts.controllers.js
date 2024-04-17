const { pool } = require("../db");

/* GET => CONSULTAR */
const getPosts = async (req, res) => {
  try {
    let result = await pool.query("SELECT * FROM posts;");

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
};

/* GET BY SMTHNG => CONSULTAR POR ALGUN PARAMETRO EN PARTICULAR */
const getPostsById = async (req, res) => {
  try {
    const { title } = req.params;

    const values = [title];
    let queryPost = "SELECT * FROM posts WHERE title = $1";

    const result = await pool.query(queryPost, values);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
};

/* POST => CREAR */
const createPost = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    const likes = 0;

    const values = [titulo, img, descripcion, likes];
    let queryPost =
      "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1,$2,$3,$4) RETURNING *";

    const result = await pool.query(queryPost, values);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
};

/* PATCH O PUT => EDITAR */
const editPost = async (req, res) => {
  try {
    const { id } = req.params;

    const values = [id];
    let queryPost =
      "UPDATE posts SET likes = likes + 1  WHERE id = $1 RETURNING *";

    const result = await pool.query(queryPost, values);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los posts");
  }
};

/* DELETE => ELIMINAR */
const deletePost = async (req, res) => {
  try {
    const { title } = req.params;

    const values = [title];
    let queryPost = "DELETE FROM posts WHERE title = $1 RETURNING *";

    const result = await pool.query(queryPost, values);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
};

module.exports = {
  getPosts,
  getPostsById,
  createPost,
  editPost,
  deletePost,
};
