export const fadeInWithDelay = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0 },
}

export const dropIn = {
  hidden: { y: "-20vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 }
  },
  exit: { y: "100vh", opacity: 0 },
}

export const scaleInOut = {
  initial: { scale: .75 },
  animate: { scale: 1 },
  exit: { scale: 0 },
}

export const tap = {
  scale: 0.98
}

export const hover = {
  scale: 1.02
}
