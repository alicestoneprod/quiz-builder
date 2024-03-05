import { ButtonHTMLAttributes, FC, ReactNode } from "react"

import cn from "classnames"

import s from "./Button.module.scss"

export interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode
  onClick?: () => void
  classNames?: string
  variant?: "primary" | "outlined" | "text"
  disabled?: boolean
}

export const Button: FC<ButtonI> = ({
  onClick,
  classNames,
  children,
  variant = "primary",
  disabled,
}) => {
  return (
    <button
      className={cn(s.button, s[`${variant}`], classNames)}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}
