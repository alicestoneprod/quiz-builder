export const inputIsActive = {
  initial: { width: 0 },
  animate: { width: 6 },
  transition: {
    delay: 0.01,
    ease: "easeIn",
  },
}

export const inputIsNotActive = {
  initial: { width: 6 },
  animate: { width: 0 },
  transition: {
    delay: 0.01,
    ease: "easeOut",
  },
}
