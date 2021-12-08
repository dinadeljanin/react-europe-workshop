import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { transparentize, darken, cover } from 'polished'

// Create Context
import { EthProvider } from '../../../context'
import { fadeInWithDelay, dropIn } from '../../../theme/FramerVariants.js'
import { COLORS } from '../../../theme/ColorPalette'

import IconButton from '../atoms/IconButton'

const { raisinBlack } = COLORS

const Overlay = styled(motion.div)`
  ${cover}
  background: ${transparentize(0.15, darken(0.075, raisinBlack))};
  display: grid;
  height: 100%;
  position: absolute;
  place-items: center;
  top: 0;
  width: 100%;
  will-change: transform;
  z-index: 100;
`

const Container = styled(motion.div)`
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  height: fit-content;
  border-radius: 15px;
  position: relative;
  width: 400px;
  z-index: 200;
`

const Banner = styled.div`
  border-radius: 15px;
  background-size: cover;
  background-position: 40% center;
  display: grid;
  height: 125px;
  place-items: center;
  width: 100%;
`

const Modal = ({body, onClick}) => {
  // Create context
  const { dispatch } = useContext(EthProvider)

  const {header, status, content} = body
  const [modalSeen, setModalSeen] = useState(true)

  const onExit = () => {
    const clearModal = {
        header: '',
        message: '',
        status: '',
        details: {
          address: '',
          amount: 0,
          transactionFee: 0,
          estimatedWait: ''
      }
    }
    setModalSeen(false)
    dispatch({ type: 'CLEAR_MODAL', payload: clearModal })
  }

  return modalSeen ? (
    ReactDOM.createPortal(
        <AnimatePresence>
          <Overlay
            variants={fadeInWithDelay}
            initial="initial"
            animate="animate"
            exit="exit"
            >
            <Container
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              >
              <IconButton handleClick={onExit} />
              <Banner status={status}>
                <h2>{header}</h2>
              </Banner>
              {content}
            </Container>
          </Overlay>
        </AnimatePresence>,
        document.getElementById('portal')
      )
  ):(
    null
  )
}

export default Modal
