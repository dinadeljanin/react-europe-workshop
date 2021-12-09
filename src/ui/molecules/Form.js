import React, { useContext } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import { Web3Provider } from '../../context'
import Balance from '../atoms/Balance'

const Header = styled.div`
  text-align: center;
  padding: 1em;
  background-color: ${lighten(0.15, '#52B2CF')};
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
        <input type="submit" value="Purchase" />
      </fieldset>
    </form>
  )
}

export default Form
