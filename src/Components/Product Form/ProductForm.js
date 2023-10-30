import React, { useState } from 'react';

const ProductForm = ({ addProduct, onFormSubmit }) => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('electronics');

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      productId,
      productName,
      price,
      category,
    };

    addProduct(product);
    // Store data in local storage
    const products = JSON.parse(localStorage.getItem(`${category}`)) || [];
    
    products.push(product);
    localStorage.setItem(`${category}`, JSON.stringify(products));

    // Clear input fields
    setProductId('');
    setProductName('');
    setPrice('');

    // Notify the parent component (App.js) that the form has been submitted
    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product ID:
        <input type="number" value={productId} onChange={(e) => setProductId(e.target.value)} />
      </label>
      <label>
        Product Name:
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="electronics">Electronics Items</option>
          <option value="food">Food Items</option>
          <option value="skincare">Skincare Items</option>
        </select>
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
