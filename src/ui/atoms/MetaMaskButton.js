import React from 'react'
import styled from 'styled-components'

import metamaskFox from '../../assets/metamask-fox.svg'

const AnchorButton = styled.a`
  padding: 0.75em 1em;
  border-radius: 25px;
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  background-color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  img {
    height: 25px;
    width: 25px;
    margin-right: 5px;
  }
`

const MetaMaskButton = () => {
  return (
    <AnchorButton
      href="https://metamask.io/"
      target="_blank"
      rel="noopener noreferrer"
      >
      <img src={metamaskFox} alt='MetaMask Fox' />
      Install MetaMask
    </AnchorButton>
  )
}

export default MetaMaskButton
