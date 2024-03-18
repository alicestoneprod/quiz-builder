import { FC } from "react"
import { DropdownOption } from "components/Dropdown"
import cn from "classnames"
import s from "./DropdownOptions.module.scss"

interface DropdownOptionsI {
  className?: string
  options?: DropdownOption[]
  onClick: (value: string | boolean) => void
}

export const DropdownOptions: FC<DropdownOptionsI> = ({ options, onClick, className }) => {
  return (
    <div className={cn(s.optionsContainer, className)}>
      {options?.map((option, index) => (
        <div key={index} onClick={() => onClick(option.value)} className={s.option}>
          {option.label}
        </div>
      ))}
    </div>
  )
}
