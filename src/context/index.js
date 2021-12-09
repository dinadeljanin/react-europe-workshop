import React, { createContext, useEffect, useCallback } from 'react'

// import detectEthereumProvider from '@metamask/detect-provider'
import { useImmerReducer } from 'use-immer'
import { ethers } from 'ethers'

import { initialState } from './initialState.js'
import { reducer } from '../reducer'

export const Web3Provider = createContext(initialState)

export const Provider = ({children}) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState)

  const connectUser = useCallback(async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    if (provider) {
      // Dive into why the signer is important
      const signer = await provider.getSigner()
      const { name, chainId } = await provider.getNetwork()
      dispatch({
        type: 'CONNECT_PROVIDER',
        payload: {
          provider, signer, name, chainId
        }
      })
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
