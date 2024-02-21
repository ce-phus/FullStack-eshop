import React from 'react';

const CartItem = ({ cartItem }) => {
  // Check if cartItem.product exists before accessing its properties
  const productName = cartItem.product ? cartItem.product.name : 'Product Name Not Available';
  const productPrice = cartItem.product ? cartItem.product.price : 'Price Not Available';

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <p className="text-lg font-semibold">{productName}</p>
      <p>Price: Ksh {productPrice}</p>
      <p>Quantity: {cartItem.quantity}</p>
    </div>
  );
};

export default CartItem;
