const seedData = [
  {
    food: 'Lettuce',
    quantity: 14
  },
  {
    food: 'Turnips',
    quantity: 11
  },
  {
    food: 'Apples',
    quantity: 35
  },
  {
    food: 'Cilantro',
    quantity: 135
  }
];

export default (state = seedData, action) => {
  if (action.type === 'updateProduce') {
    const {operation, index} = action.payload;
    const newState = [...state];

    switch(operation) {
      case '+':
        newState[index].quantity++;
        return newState;
      case '-':
        newState[index].quantity--;
        return newState;
      default:
        return state;
    }
  } else if (action.type === 'clearInventory') {
    const newState = [...state];
    newState.forEach((foodItem) => {
      foodItem.quantity = 0;
    })
    return newState
  }
  return state;
}