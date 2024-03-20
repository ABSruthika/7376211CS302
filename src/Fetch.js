// Fetch.js
import React, { Component } from 'react';

const ProductList = () => {
  
  const products = [
    {"productName":"Laptop 1",
"price":8521,
"rating":4.93,
"discount":91,
"availability":"out-of-stock"},
{"productName":"Laptop 10",
"price":7145,
"rating":4.84,
"discount":15,
"availability":"yes"},
{"productName":"Laptop 8",
"price":511,
"rating":4.48,
"discount":87,
"availability":"out-of-stock"},
{"productName":"Laptop 14",
"price":9254,
"rating":4.04,
"discount":56,
"availability":"yes"},
{"productName":"Laptop 11",
"price":2652,
"rating":3.46,
"discount":70,
"availability":"out-of-stock"},
{"productName":"Laptop 13","price":1244,"rating":3.15,"discount":45,"availability":"yes"},{"productName":"Laptop 1","price":2236,"rating":2.69,"discount":63,"availability":"yes"},{"productName":"Laptop 11","price":5683,"rating":2.45,"discount":56,"availability":"yes"},{"productName":"Laptop 13","price":8686,"rating":2.2,"discount":24,"availability":"yes"},{"productName":"Laptop 5","price":7980,"rating":1.8,"discount":89,"availability":"yes"}
  ];

  const productItems = products.map((product, index) => (
    <div key={index}>
      <p>Product Name: <strong>{product.productName}</strong></p>
      <p>Price: <strong>${product.price}</strong></p>
      <hr />
    </div>
  ));

  return (
    <div>
      <h1>Product List</h1>
      {productItems}
    </div>
  );
};

ProductList.displayName = 'ProductList'; // Set the display name

export default ProductList;
