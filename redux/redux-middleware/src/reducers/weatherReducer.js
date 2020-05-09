export default (state = {}, action) => {
  console.log(action.type)
  console.log(action)
  if (action.type === 'cityUpdate') {
    return action.payload;
  } else {
    return state;
  }
}