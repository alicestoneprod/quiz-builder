import { FC } from "react"
import { InputProps } from ".."
import cn from "classnames"
import s from "./Checkbox.module.scss"

interface CheckboxI extends InputProps {}

export const Checkbox: FC<CheckboxI> = ({
  className,
  error,
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <div className={cn(s.checkbox, className)}>
      <input onChange={onChange} value={value} type={type} />
      <label className={s.label}>{label}</label>
    </div>
  )
}
