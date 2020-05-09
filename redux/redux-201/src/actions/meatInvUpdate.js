export default (operation, index) => {
  return {
    type: 'updateMeat',
    payload: {
      operation,
      index
    }
  }
}