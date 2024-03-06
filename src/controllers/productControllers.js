//controllers/productController

//importar todos los modelos 
import * as productModel from '../models/productModel.js';

//obtener todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getProductos();
        console.log(products)
        res.status(201).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//obtener un producto por id

export const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productModel.getProductoById(productId);
        if(product){
            res.status(201).json(product);
        }
        else {
            res.status(404).json({ message: "No se encontró el producto" });
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//crear el nuevo producto

export const createNewProduct = async (req, res) => {
    try {
        const {name,price,description} = req.body;
        if (!name || !price || !description) {
            return res.status(400).json({message: "faltan datos"});
        }
        const productId = await productModel.createproduct({name,price,description});
        res.status(201).json({ id:productId, name,price,description});  
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//actualizar el producto existente  

export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const {name,price,description} = req.body;
        //await productModel.updateProduct(productId,req.body);
        await productModel.updateProduct(productId, {name,price,description});
        res.status(200).json({message: "producto actualizado"});
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//eliminar el producto

export const deleteProduct = async (req, res) => {
    try{
        const productId = req.params.id;
        await productModel.deleteProduct(productId);
        res.status(200).json({message: "producto eliminado"});
    } catch(error){
        res.status(500).json({message})
    }
}

