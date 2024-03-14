import { ButtonHTMLAttributes, FC, ReactNode } from "react"

import cn from "classnames"

import s from "./Button.module.scss"

export interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "outlined" | "text"
  disabled?: boolean
}

export const Button: FC<ButtonI> = ({
  onClick,
  className,
  children,
  variant = "primary",
  disabled,
}) => {
  return (
    <button
      className={cn(s.button, s[`${variant}`], className)}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}
