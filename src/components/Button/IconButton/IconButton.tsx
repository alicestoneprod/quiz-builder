import { FC } from "react"
import { Button, ButtonI } from "components/Button"
import cn from "classnames"
import s from "./IconButton.module.scss"

interface IconButtonI extends ButtonI {
  icon: string
  position?: "left" | "right"
}
export const IconButton: FC<IconButtonI> = ({
  children,
  variant,
  onClick,
  icon,
  position = "left",
  disabled,
}) => {
  return (
    <div className={s.iconButton} onClick={onClick}>
      <Button variant={variant} onClick={onClick} disabled={disabled}>
        {position === "left" && <img src={icon} className={cn(s.iconLeft)} />}
        {children}
        {position === "right" && <img src={icon} className={cn(s.iconRight)} />}
      </Button>
    </div>
  )
}
