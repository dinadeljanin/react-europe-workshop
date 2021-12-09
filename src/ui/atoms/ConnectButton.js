import React, { useContext } from 'react'

import { Web3Provider } from '../../context'

const ConnectButton = () => {
  const { actions } = useContext(Web3Provider)
  const { connect } = actions

  return (
    <button onClick={() => connect()}>
      Connect Wallet
    </button>
  )
}

export default ConnectButton
