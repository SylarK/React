import React from 'react';

function Products(props) {
  return (
    <div>
      <p>Produto: {props.name} </p>
      <p>
        Preço : <span style={{ color: 'red' }}>{props.price}</span>
      </p>
      <hr />
    </div>
  );
}

export default Products;
