import { FC, ReactNode } from "react"
import { NavLink } from "react-router-dom"
import cn from "classnames"
import s from "./Link.module.scss"

interface LinkI {
  variant?: "nav" | "black" | "button"
  children: ReactNode
  className?: string
  to: string
}

export const Link: FC<LinkI> = ({
 className, to, variant = "black", children 
}) => (
  <NavLink to={to} className={cn(s.link, className, s[variant])}>
    {children}
  </NavLink>
)
