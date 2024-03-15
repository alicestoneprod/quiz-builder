import { FC, ReactNode } from "react"
import cn from "classnames"
import s from "./BorderedText.module.scss"

interface BorderedTextI {
  position?: "left" | "right" | "bottom"
  className?: string
  children: ReactNode
}
export const BorderedText: FC<BorderedTextI> = ({ children, className, position = "left" }) => (
  <div className={cn(s.borderedText, className, s[position])}>
    <p className={s.text}>{children}</p>
  </div>
)
