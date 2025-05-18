export const incrementCount = id => ({ type: 'INCREMENT', payload: id });
export const decrementCount = id => ({ type: 'DECREMENT', payload: id });
export const addItem = title => ({ type: 'ADD_ITEM', payload: title });
