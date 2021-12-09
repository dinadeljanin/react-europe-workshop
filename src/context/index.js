import React, { createContext, useEffect, useCallback } from 'react'

import { useImmerReducer } from 'use-immer'
import { ethers } from 'ethers'

import { initialState } from './initialState.js'
import { reducer } from '../reducer'

export const Web3Provider = createContext(initialState)

export const Provider = ({children}) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState)

  const connectUser = useCallback(async(provider, accounts) => {
    const balance = await provider.getBalance(accounts[0])

    const connectedAccount = {
      address: accounts[0],
      balance
    }
    dispatch({ type: 'CONNECT_USER', payload: connectedAccount })
    
  }, [dispatch])

  const connectProvider = useCallback(async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    if (provider) {
      const signer = await provider.getSigner()
      const { name, chainId } = await provider.getNetwork()
      dispatch({
        type: 'CONNECT_PROVIDER',
        payload: {
          provider, signer, name, chainId
        }
      })
      const accounts = await window.ethereum.request({ method: "eth_accounts" })
      if (accounts.length > 0) {
        connectUser(provider, accounts)
      }
    }
  }, [dispatch, connectUser])

  useEffect(() => {
    if (window.ethereum) {
      connectProvider()
    }
  }, [connectProvider])

  const connect = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      connectUser(provider, accounts)
    } catch (e) {
      console.log('o no, our app is broken')
    }
  }

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
        user,
        actions: { connect }
      }}>
      {children}
    </Web3Provider.Provider>
  )
}
