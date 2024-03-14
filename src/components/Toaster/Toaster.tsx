import { FC } from "react"
import { Toaster as HotToaster, ToasterProps } from "react-hot-toast"
import s from "./Toaster.module.scss"

interface ToasterI extends ToasterProps {}

export const Toaster: FC<ToasterI> = ({ ...props }) => {
  return (
    <div className={s.toaster}>
      <HotToaster {...props} />
    </div>
  )
}
