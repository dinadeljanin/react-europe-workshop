import React, { useContext } from 'react'

import { Web3Provider } from '../../context'
import MetaMaskButton from '../atoms/MetaMaskButton'
import ConnectButton from '../atoms/ConnectButton'

const Header = () => {
  const { provider } = useContext(Web3Provider)

  const renderSwitch = () => {
    switch(true) {
      case provider !== null:
        return <ConnectButton />
      case !provider:
      default:
        return <MetaMaskButton />
    }
  }
  return (
    <header>
      <h3>Web3 Workshop with Frens</h3>
      {renderSwitch()}
    </header>
  )
}

export default Header
