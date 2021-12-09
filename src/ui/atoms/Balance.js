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
    font-size: 1.1em;
    color: ${transparentize(0.35, '#000')};
  }
  > img {
    height: 100px;
    display: block;
    margin: 0.25em auto 0;
    width: auto;
  }
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    > p {
      font-size: 1.75em;
      font-weight: 600;
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

  return (
    <Wrap>
      <p>Available Balance</p>
      {balance ? (
        <div>
          <p>{smolBalance > 1 ? smolBalance : smolBalance > 0 ? smolBalance.toFixed(5) : smolBalance}</p>
          <img src={eth} alt='Ethereum Logo' />
        </div>
      ):(
        <img src="https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif" alt=""/>
      )}

    </Wrap>
  )
}

export default Balance
