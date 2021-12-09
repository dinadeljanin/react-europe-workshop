import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import { Web3Provider } from '../../context'
import Balance from '../atoms/Balance'
import Counter from '../atoms/Counter'

const Header = styled.div`
  text-align: center;
  padding: 1em;
  background-color: ${lighten(0.15, '#52B2CF')};
  border-bottom: 2px solid #000;
`

const Form = () => {
  const { user, provider } = useContext(Web3Provider)
  const { address } = user

  return (
    <form action="">
      <Header>
        <h2>Buy a Ticket</h2>
      </Header>
      <fieldset disabled={provider === null || address === ''}>
        <Balance />
        <Counter />
        <input type="submit" value="Purchase for 3 ETH" />
      </fieldset>
    </form>
  )
}

export default Form
