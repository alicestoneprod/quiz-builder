import { useState } from "react"
export const useHover = () => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const onHover = <T>(e: T) => {
    e && setIsHover(true)
  }

  const onStopHover = <T>(e: T) => {
    e && setIsHover(false)
  }

  return { isHover, onHover, onStopHover }
}
