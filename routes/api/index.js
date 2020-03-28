const router = require("express").Router();
const groceriesRoutes = require("./grocery");

router.use("/grocery", groceriesRoutes);

module.exports = router;