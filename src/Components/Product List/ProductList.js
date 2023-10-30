import React from 'react';

const ProductList = ({ category, onDeleteProduct }) => {
  // Retrieve prducts from local storage
  const products = JSON.parse(localStorage.getItem(`${category}`)) || [];

  const handleDelete = (index) => {
    // Delete the product at the specified index and update local storage
    products.splice(index, 1);
    localStorage.setItem(`${category}`, JSON.stringify(products));
    onDeleteProduct();
  };

  return (
    <div>
      <h3> {category} </h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            Product ID: {product.productId}, Product Name: {product.productName}, Price: {product.price}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
