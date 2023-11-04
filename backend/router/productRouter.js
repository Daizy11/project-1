const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router
  .route("/")
  .get(productController.getAllData)
  .post(productController.createData)
  .delete(productController.deleteData)
  
router.route('/:id').patch(productController.updateData);


module.exports = router;