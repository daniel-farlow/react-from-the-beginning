export default (operation, index) => {
  return {
    type: 'updateFrozen',
    payload: {
      operation,
      index
    }
  }
}