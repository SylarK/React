import React from 'react';
import Products from './Products';
import productData from './ProductData';

function App() {
  const productComponents = productData.map((product) => (
    <Products key={product.id} name={product.name} price={product.price} />
  ));

  return <div>{productComponents}</div>;
}

export default App;
