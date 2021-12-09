import React from 'react'
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
  background-color: #000;
  border-radius: 25px;
  overflow: hidden;
  height: 40px;
  button {
    font-size: 1.4em;
    padding: 0.5em;
    border-radius: 0;
    background-size: cover;
  }
  input {
    display: block;
    background-color: #fff;
    height: 42px;
    width: 50px;
  }
`

const Counter = () => {

  const changeQuantity = (operation) => {
    switch(operation) {
      case 'plus':
       console.log('increase')
      break
      case 'minus':
        console.log('decrease')
      break
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
      <input type="number" />
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
