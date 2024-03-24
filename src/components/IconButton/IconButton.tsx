import { FC } from "react"
import { useHover } from "shared/hooks"
import { buttonVariants } from "./buttonVariants"
import LabelPolygon from "assets/icons/label-polygon.svg?react"
import cn from "classnames"
import s from "./IconButton.module.scss"

interface IconButtonI {
  onClick?: () => void
  className?: string
  variant: "arrow-left" | "settings"
  disabled?: boolean
  hoverText?: string
}

export const IconButton: FC<IconButtonI> = ({
  variant = "arrow-left",
  onClick,
  className,
  hoverText,
  disabled,
}) => {
  const { isHover, onHover, onStopHover } = useHover()
  const Icon = buttonVariants.find((el) => el.variant === variant)?.icon

  return (
    <div className={s.iconButtonWrapper}>
      <button
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={(e) => onHover(e)}
        onMouseLeave={(e) => onStopHover(e)}
        className={cn(s.iconButton, className)}>
        {Icon && <Icon />}
      </button>
      <div className={cn(s.labelTextCnt, isHover ? s.isHovered : s.isNotHovered)}>
        <LabelPolygon className={s.labelIcon} />
        <label className={s.label}>{hoverText}</label>
      </div>
    </div>
  )
}
