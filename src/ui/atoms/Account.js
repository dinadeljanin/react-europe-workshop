import React, { useContext } from 'react'
import styled from 'styled-components'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

import { Web3Provider } from '../../context'
import { formatAddress } from '../../utils'

const Wrap = styled.div`
  padding: 0.75em 1em;
  border-radius: 25px;
  border: 2px solid #000;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    font-weight: 600;
  }
`

const JazziconWrap = styled.div`
  border-radius: 50%;
  height: 20px;
  overflow: hidden;
  width: 20px;
  margin-left: 7px;
  > img {
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }
`

const Account = () => {
  const { user } = useContext(Web3Provider)
  const { address } = user

  return (
    <Wrap>
      <p>{formatAddress(address)}</p>
      <JazziconWrap>
        <Jazzicon
          diameter={20}
          seed={jsNumberForAddress(address)} />
      </JazziconWrap>
    </Wrap>
  )
}

export default Account
