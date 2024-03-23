import { FC, InputHTMLAttributes, LegacyRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { inputIsActive, inputIsNotActive } from "shared/constants/motionAnimateOptions"
import cn from "classnames"

import s from "./Input.module.scss"
import { Checkbox } from "./Checkbox"

export interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
  placeholder?: string
  className?: string
  value?: string
  onChange: () => void
  error?: string | undefined
  label?: string
  type?: string
  id?: string
  labelName?: string
  ref?: LegacyRef<HTMLInputElement>
}

export const Input: FC<InputProps> = ({
  className,
  error,
  label,
  type = "text",
  value,
  onChange,
  ref,
  placeholder,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  if (type === "checkbox") {
    return (
      <Checkbox
        className={className}
        error={error}
        label={label}
        type={type}
        value={value}
        ref={ref}
        onChange={onChange}
      />
    )
  }

  return (
    <div
      className={cn(
        s.inputLabelCnt,
        className,
        {
          [s.inputFocused]: isFocused,
        },
        { [s.error]: error },
      )}>
      <label className={s.label}>{label}</label>
      {isFocused && (
        <AnimatePresence>
          <motion.div {...inputIsActive} className={s.inputLeftColor} />
        </AnimatePresence>
      )}
      {!isFocused && (
        <AnimatePresence>
          <motion.div {...inputIsNotActive} className={s.inputLeftColor} />
        </AnimatePresence>
      )}
      <input
        ref={ref}
        className={s.input}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}></input>
    </div>
  )
}
