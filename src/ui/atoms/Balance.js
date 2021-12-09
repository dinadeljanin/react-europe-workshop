import React, { useContext } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import { transparentize } from 'polished'

import { Web3Provider } from '../../context'

import eth from '../../assets/eth.png'

const Wrap = styled.div`
  width: fit-content;
  margin: 1em auto;
  > p:first-of-type {
    font-weight: 500;
    color: ${transparentize(0.35, '#000')};
  }
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    > p {
      font-size: 1.5em;
      font-weight: 500;
    }
    > img {
      margin-left: 5px;
      height: 20px;
      width: auto;
    }
  }
`

const Balance = () => {
  const { user } = useContext(Web3Provider)
  const { balance } = user

  const smolBalance = ethers.utils.formatEther(balance)

  return balance ? (
    <Wrap>
      <p>Available Balance</p>
      <div>
        <p>{smolBalance}</p>
        <img src={eth} alt='Ethereum Logo' />
      </div>
    </Wrap>
  ):(
    <p>???</p>
  )
}

export default Balance
