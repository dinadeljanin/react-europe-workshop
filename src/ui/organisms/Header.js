import React, { useContext } from 'react'

import { Web3Provider } from '../../context'
import MetaMaskButton from '../atoms/MetaMaskButton'
import Account from '../atoms/Account'
import ConnectButton from '../atoms/ConnectButton'

const Header = () => {
  const { provider, user } = useContext(Web3Provider)
  const { address } = user

  const renderSwitch = () => {
    switch(true) {
      case address !== '':
        return <Account />
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
