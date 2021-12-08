import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import xClose from '../../../assets/icons/x-close.svg'

const icons = {
  'exit': xClose
}

const Button = styled(motion.button)`
  background: url(${icons['exit']}) center;
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
