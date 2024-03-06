//models/productModel.js
//creacion modelo producto

import {dbConfig} from '../config/db.config.js'
import mysql from 'mysql2/promise'

const pool = mysql.createPool(dbConfig); //abrir la coexion con los del parentesis 

//obtener todos los ´productos 
//get all
export const getProductos = async () => {
    const [rows] = await pool.query('SELECT * FROM products');
    return rows;
};

//Obtener un solo producto por id 
//getById

export const getProductosById = async (productId) => {
    const [rows] = await pool.query('SELECT * FROM products WHERE Id =?', [productId]);
    return rows[0];
};

//Agregar un nuevo producto
//create

export const   createproduct = async (productData) => {
const {name, price, description}= productData;
const [result] = await pool.query('INSERT INTO products (name, price, description) VALUES (?,?,?)',[name, price, description]);
    return result.insertId;

}



//actualizar un producto existente
//update

export const updateProduct = async (productId, productData) => {
    //const {name, price, description}= productData;
    //await pool.query('UPDATE products SET name = ?, price = ?, description = ? WHERE Id=?', name, price,description,productId);

    await pool.query('UPDATE products SET name =?, price =?, description =? WHERE Id =?', [productData.name, productData.price, productData.description, productId]);

};


//eliminar un producto existente
//delete

export const deleteProduct = async (productId) => {
    await pool.query('DELETE FROM products WHERE Id =?', [productId]);
}; 