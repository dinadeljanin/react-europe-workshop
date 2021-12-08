import React, { createContext, useEffect, useCallback } from 'react'
import { useImmerReducer } from 'use-immer';

import Web3 from 'web3'

import { initialState } from './initialState.js'
import { reducer } from '../reducer'

export const Web3Provider = createContext(initialState)

export const Provider = ({children}) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  // Want to get a provider onload
  

  return (
    <Web3Provider.Provider
      value={{

      }}>
      {children}
    </Web3Provider.Provider>
  )
}
