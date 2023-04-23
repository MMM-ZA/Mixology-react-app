import React from 'react';

const CartContext = React.createContext({
  item: [],
  amount: 0,
  addAmount: (item) => {},
  removeAmount:(id) => {}
});

export default CartContext;
