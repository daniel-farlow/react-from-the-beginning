export default (operation, index) => {
  return {
    type: 'updateProduce',
    payload: {
      operation,
      index
    }
  }
}