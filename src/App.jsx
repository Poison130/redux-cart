import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './components/CartItem';
import { addItem } from './redux/actions';

export default function App() {
  const cart = useSelector(state => state);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const name = prompt('Введите название товара');
    if (name) {
      dispatch(addItem(name));
    }
  };

  return (
    <div>
      <h1>Корзина</h1>
      <button onClick={handleAdd}>Добавить товар</button>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
