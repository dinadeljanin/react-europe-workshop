export const reducer = (state, action) => {
  switch(action.type) {
    case 'CONNECT_PROVIDER':
      state.provider = action.payload
      return
    // Connect_web3
    default: break
  }
}
