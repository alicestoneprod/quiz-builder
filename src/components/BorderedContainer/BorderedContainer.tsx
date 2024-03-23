import { FC, ReactNode } from "react"
import cn from "classnames"
import s from "./BorderedContainer.module.scss"

interface BorderedContainerI {
  children: ReactNode
  className?: string
}

export const BorderedContainer: FC<BorderedContainerI> = ({ children, className }) => {
  return <div className={cn(s.borderedContainer, className)}>{children}</div>
}
