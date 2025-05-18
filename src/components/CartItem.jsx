// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../redux/actions';


export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Количество: {item.count}</p>
      <button onClick={() => dispatch(decrementCount(item.id))}>-</button>
      <button onClick={() => dispatch(incrementCount(item.id))}>+</button>
    </div>
  );
}
