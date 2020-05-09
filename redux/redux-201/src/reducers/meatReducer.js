const seedData = [
  {
    food: 'Chicken Breasts',
    quantity: 84
  },
  {
    food: 'Bacon',
    quantity: 453
  },
  {
    food: 'Mahi Mahi',
    quantity: 12
  },
  {
    food: 'Salmon',
    quantity: 74
  }
];

export default (state = seedData, action) => {
  if (action.type === 'updateMeat') {
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