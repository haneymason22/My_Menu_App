const router = require("express").Router();
const groceriesController = require("../../controllers/groceriesController");

router.route("/")
  .get(groceriesController.findAll)
  .post(groceriesController.create);

router
  .route("/:id")
  .get(groceriesController.findById)
  .put(groceriesController.update)
  .delete(groceriesController.remove);

module.exports = router;