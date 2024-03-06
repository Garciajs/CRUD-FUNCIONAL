//routes/productRoutes.js

import express  from "express";
import *as productController from "../controllers/productControllers.js";

//importar data de controlador
const router = express.Router();

//ruta para obtener todos los productos
router.get("/products", productController.getAllProducts);

//ruta para obtener un producto

router.get("/product/:id", productController.getProductById);

// ruta para crear un producto
router.post('/newProduct', productController.createNewProduct);


//ruta para editar producto
router.put("/editProduct/:id", productController.updateProduct);

//ruta para borrar producto

router.delete("/deleteProduct/:id", productController.deleteProduct);

export default router;  