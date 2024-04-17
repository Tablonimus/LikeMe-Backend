const { Router } = require("express");
const router = Router();
const postsRoutes = require("./posts.routes");

/* GET DE EJEMPLO  localhost:3000/   */
router.get("/", (req, res) => {
  res.send("💥 BIENVENIDO A LA API DE POSTS MAIS LINDA DO MUNDO! 💥");
});

/*definimos los endpoints en secciones */
router.use("/posts", postsRoutes);

module.exports = router;
