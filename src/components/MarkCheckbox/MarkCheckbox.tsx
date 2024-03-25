import { FC, useState } from "react"
import MarkIcon from "assets/icons/mark.svg?react"
import cn from "classnames"
import s from "./MarkCheckbox.module.scss"

interface MarkCheckboxI {
  onClick?: () => void
  className?: string
  value: boolean
}

export const MarkCheckbox: FC<MarkCheckboxI> = ({ onClick, className, value }) => {
  const handleOnClick = () => {
    onClick?.()
  }

  return (
    <div
      className={cn(s.markCheckbox, value ? s.isChecked : s.isNotChecked, className)}
      onClick={handleOnClick}>
      <MarkIcon />
    </div>
  )
}
