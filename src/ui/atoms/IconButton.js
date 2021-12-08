import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import exit from '../../assets/exit.svg'

const icons = {
  'exit': exit
}

const Button = styled(motion.button)`
  background: url(${icons['exit']}) center no-repeat;
  border: none;
  cursor: pointer;
  height: 30px;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 30px;
`

const IconButton = ({handleClick}) => {
  return (
    <Button onClick={handleClick} />
  )
}

export default IconButton
