import { FC, ReactNode } from "react"
import { Button, ButtonI } from "components/Button"
import s from "./IconButton.module.scss"
import cn from "classnames"

interface IconButtonI extends ButtonI {
  icon: ReactNode
  position?: "left" | "right"
}
export const IconButton: FC<IconButtonI> = ({
  className,
  children,
  variant,
  onClick,
  icon,
  position = "left",
  disabled,
}) => (
  <div className={cn(className, s.iconButton)} onClick={onClick}>
    <Button variant={variant} onClick={onClick} disabled={disabled}>
      {position === "left" && icon}
      {children}
      {position === "right" && icon}
    </Button>
  </div>
)
