const defaultState = [
  { id: 1, title: 'Велосипед', count: 5 },
  { id: 2, title: 'Самокат', count: 4 },
  { id: 3, title: 'Гантели', count: 7 },
  { id: 4, title: 'Ракетки', count: 1 }
];

let nextId = 5;

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.map(item =>
        item.id === action.payload && item.count < 25
          ? { ...item, count: item.count + 1 }
          : item
      );
    case 'DECREMENT':
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter(item => item.count > 0); // удаляем, если count < 1
    case 'ADD_ITEM':
      return [
        ...state,
        { id: nextId++, title: action.payload, count: 1 }
      ];
    default:
      return state;
  }
}
