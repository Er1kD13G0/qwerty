import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, deleteProduct } from '../services/api';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await getProducts();
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    const productData = { name: newProduct };
    await createProduct(productData);
    setProducts([...products, productData]);
    setNewProduct('');
  };

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h1>Gerenciamento de Produtos</h1>
      <input 
        type="text" 
        value={newProduct} 
        onChange={(e) => setNewProduct(e.target.value)} 
        placeholder="Nome do produto" 
      />
      <button onClick={handleAddProduct}>Adicionar Produto</button>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} <button onClick={() => handleDeleteProduct(product.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
