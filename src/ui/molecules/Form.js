import React, { useContext, useRef, useState, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import { Web3Provider } from '../../context'
import Balance from '../atoms/Balance'
import Counter from '../atoms/Counter'

const Header = styled.div`
  text-align: center;
  padding: 1em;
  background-color: ${lighten(0.15, '#52B2CF')};
  border-bottom: 3px solid #000;
`

const Form = () => {
  const { user, provider } = useContext(Web3Provider)
  const { address } = user
  const [ticketAmount, setAmount] = useState(1);

  return provider !== null && address !== '' && (
    <form action="">
      <Header>
        <h1>Buy a Ticket</h1>
      </Header>
      <fieldset disabled={provider === null || address === ''}>
        <Balance />
        <Counter amount={ticketAmount} setAmount={setAmount} />
        <input type="submit" value={`Purchase for ${ticketAmount} ETH`} />
      </fieldset>
    </form>
  )
}

export default Form
