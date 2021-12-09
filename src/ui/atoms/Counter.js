import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  border: 1px solid red;
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
  }
  input {
    display: block;
    height: 105%;
    width: 50px;
  }
`

const Counter = () => {
  return (
    <Wrap>
      <button>-</button>
      <input type="number" />
      <button>+</button>
    </Wrap>
  )
}

export default Counter
