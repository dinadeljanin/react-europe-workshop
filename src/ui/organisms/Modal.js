import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { transparentize, cover } from 'polished'

// Create Context
// import { EthProvider } from '../../../context'
import { fadeInWithDelay, dropIn } from '../../theme/FramerVariants.js'
import IconButton from '../atoms/IconButton'

const Overlay = styled(motion.div)`
  ${cover}
  background: ${transparentize(0.45,'#000')};
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
  background-color: #fff;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  height: fit-content;
  position: relative;
  width: 400px;
  z-index: 400;
  border: 3px solid #000;
`

const Header = styled.div`
  display: grid;
  place-items: center;
  padding: 0;
  border-bottom: 3px solid #000;
  background-color: #FFE3E3;
  height: 100px;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1em 1.25em;
  p {
    margin-bottom: 1.25em;
    text-align: center;
  }
`

const Modal = ({body, onClick}) => {
  // Create context
  // const { dispatch } = useContext(EthProvider)

  const {header, status, content} = body
  const [modalSeen, setModalSeen] = useState(true)

  const onExit = () => {
    // const clearModal = {
    //     header: '',
    //     message: '',
    //     status: '',
    //     details: {
    //       address: '',
    //       amount: 0,
    //   }
    // }
    setModalSeen(false)
    // dispatch({ type: 'CLEAR_MODAL', payload: clearModal })
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
              <Header status={status}>
                <h3>{header}</h3>
              </Header>
              <Content>
                {content}
              </Content>
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
