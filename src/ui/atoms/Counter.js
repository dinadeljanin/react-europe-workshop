import React, { useRef } from 'react'
import styled from 'styled-components'

import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'

const Wrap = styled.div`
  display: flex;
  margin: 1em auto;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 25px;
  overflow: hidden;
  height: 38px;
  button {
    font-size: 1.4em;
    padding: 0.5em;
    border-radius: 0;
    background-size: cover;
    background-color: #fff;
  }
  button:first-of-type {
    border-right: 2px solid #000;
  }
  button:last-of-type {
    border-left: 2px solid #000;
  }
  input {
    display: block;
    padding: 0;
    text-align: center;
    background-color: #fff;
    height: 42px;
    width: 50px;
  }
`

const Counter = ({amount, setAmount}) => {
  const inputRef = useRef()

  const changeQuantity = (operation) => {
    switch(operation) {
      case 'plus':
        return setAmount(amount+1)
      case 'minus':
        if (amount > 0) {
          return setAmount(amount--)
        } else {
          return setAmount(amount = 1)
        }
      default:
      break
    }
  }

  const keyBlock = (event) => {
    let charCode = event.which ? event.which : event.keyCode

    switch(true) {
      case charCode === 46:
      case charCode === 101:
      case charCode === 43:
      case charCode === 45:
        event.preventDefault()
        return

      default:
        break
    }
  }

  return (
    <Wrap>
      <button
        type="button"
        image="minus"
        onClick={() => changeQuantity('minus')}>
        <img src={minus} alt="Decrease Button"/>
      </button>
      <input
        onKeyPress={keyBlock}
        onChange={() => setAmount(inputRef.current.value)}
        ref={inputRef}
        type="number"
        value={amount}
        min='0'
        max='100'
      />
      <button
        type="button"
        image="plus"
        onClick={() => changeQuantity('plus')}>
        <img src={plus} alt="Increase Button"/>
      </button>
    </Wrap>
  )
}

export default Counter
