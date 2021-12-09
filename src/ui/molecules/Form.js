import React, { useContext } from 'react'

import { Web3Provider } from '../../context'

const Form = () => {
  const { user, provider } = useContext(Web3Provider)
  const { address } = user

  return (
    <form action="">
      <fieldset disabled={provider === null || address === ''}>
        <input type="submit" value="Purchase" />
      </fieldset>
    </form>
  )
}

export default Form
