const express = require("express");
const router = express.Router();
const multer = require("multer");
const authMiddleware = require('../middlewares/auth.middleware')
const productController = require("../controllers/product.controller");

const upload = multer({ storage: multer.memoryStorage() });

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.post(
  "/",
  authMiddleware,
  upload.array("images", 5),
  productController.createProduct,
);

router.put(
  "/:id",
  authMiddleware,
  upload.array("images", 5),
  productController.updateProduct,
);
router.delete("/:id", authMiddleware, productController.deleteProduct);

module.exports = router;
