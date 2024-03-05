import { FC, ReactNode } from "react"
import s from "./Title.module.scss"

interface TitleI {
  children: ReactNode
}

export const Title: FC<TitleI> = ({ children }) => {
  return <div className={s.title}>{children}</div>
}
