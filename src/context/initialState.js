export const initialState = {
  isLoading: true,
  isConnected: false,
  network: null,
  chainId: 0,
  provider: null,
  user: {
    address: '',
    balance: 0,
  },
  transactionFeedback: {
    header: '',
    message: '',
    status: '',
    details: {
      address: '',
      amount: 0,
      trxHash: '',
    }
  }
}
