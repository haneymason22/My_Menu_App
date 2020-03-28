const router = require("express").Router();
const groceriesRoutes = require("./groceries");

router.use("/groceries", groceriesRoutes);

module.exports = router;
