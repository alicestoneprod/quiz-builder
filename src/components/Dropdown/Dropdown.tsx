import { FC, useState, useRef, useEffect, ReactNode } from "react"
import IconDropdown from "assets/icons/arrow-downward.svg?react"
import { DropdownOptions } from "./DropdownOptions"
import { useNavigate } from "react-router-dom"
import cn from "classnames"
import s from "./Dropdown.module.scss"

export interface DropdownOption {
  label: string
  value: string | boolean
}

interface DropdownI {
  className?: string
  label: string
  options?: DropdownOption[]
  variant?: "default" | "navigate"
  onClick?: (value: string | boolean) => void
  icon?: ReactNode
  iconPosition?: "right" | "left"
}

export const Dropdown: FC<DropdownI> = ({
  className,
  label,
  options,
  variant = "default",
  onClick,
  icon,
  iconPosition,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const isClickedOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsVisible(false)
      }
    }
    document.addEventListener("click", isClickedOutside)
    return () => document.removeEventListener("click", isClickedOutside)
  }, [])

  const visibleToggler = () => {
    setIsVisible((prevState) => !prevState)
  }

  const onSelect = (value: string | boolean) => {
    switch (variant) {
      case "default":
        onClick?.(value)
        setIsVisible(false)
        break
      case "navigate":
        navigate(value as string)
        setIsVisible(false)
        break
    }
  }

  return (
    <div className={cn(s.dropdown, className)} ref={ref}>
      <div className={s.iconLabelCnt} onClick={visibleToggler}>
        {iconPosition === "left" && icon}
        <label className={s.label}>{label}</label>
        <IconDropdown width={15} height={15} className={s.icon} />
      </div>
      {isVisible && (
        <DropdownOptions
          className={isVisible ? s.visible : s.invisible}
          options={options}
          onClick={onSelect}
        />
      )}
      {iconPosition === "right" && icon}
    </div>
  )
}
