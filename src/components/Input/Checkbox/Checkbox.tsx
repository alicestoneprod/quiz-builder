import { FC } from "react"
import cn from "classnames"
import { InputProps } from ".."
import s from "./Checkbox.module.scss"

interface CheckboxI extends InputProps {}

export const Checkbox: FC<CheckboxI> = ({
  className,
  error,
  ref,
  label,
  type,
  value,
  onChange,
}) => (
  <div className={cn(s.checkbox, className)}>
    <input ref={ref} onChange={onChange} value={value} type={type} />
    <label className={s.label}>{label}</label>
  </div>
)
