import React, { useContext, useState, useEffect } from 'react'
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
  p {
    margin-top: .5em;
    font-weight: 500;
  }
`

const Form = () => {
  const [disabled, setDisabled] = useState(true)
  const { user, provider } = useContext(Web3Provider)
  const { address } = user
  const [ticketAmount, setAmount] = useState(1);

  useEffect(() => {
    (address !== '' && provider) && setDisabled(false)
  }, [address, provider])

  return (
    // on submit
    // Grab user address and amount and tickets
    // Throw that into a modal with a transaction receipt
    <form action="">
      <Header>
        <h1>Buy a Ticket</h1>
        {/* Will change, pending ABI */}
        <p>100/100 Remaining</p>
      </Header>
      <fieldset disabled={disabled}>
        <Balance />
        <Counter amount={ticketAmount} setAmount={setAmount} disabled={disabled} />
        <input type="submit" value={`Purchase for ${ticketAmount} ETH`} />
      </fieldset>
    </form>
  )
}

export default Form
