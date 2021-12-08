import React from 'react'

import Modal from '../organisms/Modal.js'
import MetaMaskButton from '../atoms/MetaMaskButton'

const Onboarding = () => {
  const { ethereum } = window
  const body = {
    header: "MetaMask wasn't detected",
    status: "warning",
    content: (
      <>
        <p>
          You might not have MetaMask installed, or you might be using an unsupported browser.
          While you can view this dApp in a read-only state, you won't be able to interact with it.
        </p>
        <MetaMaskButton />
      </>
    )
  }
  return ethereum ? <Modal body={body} /> : null
}

export default Onboarding
