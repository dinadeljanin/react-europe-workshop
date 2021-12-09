export const reducer = (state, action) => {
  switch(action.type) {
    case 'CONNECT_PROVIDER':
      state.provider = action.payload.provider
      state.signer = action.payload.signer
      state.network = action.payload.name
      state.chainId = action.payload.chainId
      return
    // Connect_web3
    default: break
  }
}
