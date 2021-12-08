import React, { createContext, useEffect, useCallback } from 'react'

import detectEthereumProvider from '@metamask/detect-provider'
import { useImmerReducer } from 'use-immer'
import Web3 from 'web3'

import { initialState } from './initialState.js'
import { reducer } from '../reducer'

export const Web3Provider = createContext(initialState)

export const Provider = ({children}) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState)

  const connectUser = useCallback(async() => {
    // We want to get a provider onload
      const provider = await detectEthereumProvider()
      // If it's found
      if (provider) {
        // Create new web3 instance
        const web3Provider = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545")
        // Then we grab the chainId, the network
        const chainId = web3Provider.eth.getChainId()
        const network = web3Provider.eth.net.getId()

        // First dispatch
        dispatch({ type: 'CONNECT_PROVIDER', payload: web3Provider })


      }
  }, [dispatch])

  useEffect(() => {
    if (window.ethereum) {
      connectUser()
    }
  }, [connectUser])

  const { isLoading, isConnected, network, chainId, provider, user, transactionFeedback } = state
  return (
    <Web3Provider.Provider
      value={{
        chainId,
        isLoading,
        isConnected,
        network,
        provider,
        transactionFeedback,
        user
      }}>
      {children}
    </Web3Provider.Provider>
  )
}
