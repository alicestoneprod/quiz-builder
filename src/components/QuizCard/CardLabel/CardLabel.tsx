import { FC, ReactNode } from "react"
import s from "./CardLabel.module.scss"

interface CardLabelI {
  children: ReactNode
}

export const CardLabel: FC<CardLabelI> = ({ children }) => {
  return <div className={s.cardLabel}>{children}</div>
}
