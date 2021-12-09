export const reducer = (state, action) => {
  switch(action.type) {
    case 'CONNECT_PROVIDER':
      state.provider = action.payload.provider
      state.signer = action.payload.signer
      state.network = action.payload.name
      state.chainId = action.payload.chainId
      return

      case 'CONNECT_USER':
        state.user = action.payload
        return
    default: break
  }
}
