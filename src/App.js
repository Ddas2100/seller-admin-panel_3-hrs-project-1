import React, { useState, useEffect } from 'react';
import ProductForm from './Components/Product Form/ProductForm';
import ProductList from './Components/Product List/ProductList';
import './App.css';

function App() {
  const [showProductLists, setShowProductLists] = useState(false);
  const [productDeleted, setProductDeleted] = useState(false);
  const addProduct = (product) => {
    // This function will be passed to the ProductForm component to add new products.
    // You can use this function to update the state or perform other actions.
  };

  const handleOrderDelete = () => {
    setProductDeleted(!productDeleted);
  };

  useEffect(() => {
    if (showProductLists) {
      // Clear the order lists on each form submission
      setShowProductLists(false);
    }
  }, [showProductLists]);

  return (
    <div>
      <h1>Seller Admin Panel</h1>

      <h2>Product Details Form</h2>
      <ProductForm addProduct={addProduct} onFormSubmit={() => setShowProductLists(true)} />

      <div>
        <div>
          <ProductList category="Electronics Items" onDeleteProduct={handleOrderDelete} />
          <ProductList category="Food Items" onDeleteProduct={handleOrderDelete} />
          <ProductList category="Skincare Items" onDeleteProduct={handleOrderDelete} />
        </div> 
        {showProductLists}
      </div>
    </div>
  );
}

export default App;
