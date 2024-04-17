const { Router } = require("express");
const router = Router(); //localhost:3000/category
const {
  getPosts,
  createPost,
  editPost,
} = require("../controllers/posts.controllers.js");

/* GET => CONSULTA */
router.get("/", getPosts);

/* POST => CREAR */
router.post("/", createPost);

/* PATCH O PUT => EDITAR */
router.put("/:id", editPost);

module.exports = router;
