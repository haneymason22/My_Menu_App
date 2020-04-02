 const router = require("express").Router();
 const groceriesRoutes = require("./recipes");

 router.use("/groceries", groceriesRoutes);

 module.exports = router;
