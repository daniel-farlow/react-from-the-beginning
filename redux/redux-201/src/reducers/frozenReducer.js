const seedData = [
  {
    food: 'TV Dinners',
    quantity: 10
  },
  {
    food: 'Frozen Veggies',
    quantity: 21
  },
  {
    food: 'Frozen Pizzas',
    quantity: 25
  }
];

export default (state = seedData, action) => {
  // run a bunch of logic if the action has the type we are interested in
  if (action.type === 'updateFrozen') {
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
  // if the action does not have a type we are interested in, then just return state
  return state;
}