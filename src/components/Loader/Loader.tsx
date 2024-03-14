import { FC, HTMLAttributes } from "react"
import { useAppSelector } from "shared/hooks"
import cn from "classnames"
import s from "./Loader.module.scss"

interface LoaderI extends HTMLAttributes<HTMLDivElement> {}

export const Loader: FC<LoaderI> = (props) => {
  const isLoading = useAppSelector((state) => state.user.loading)
  const className = isLoading ? s.isLoading : s.isNotLoading
  return (
    <div className={cn(s.loaderWrapper, className)} {...props}>
      <div className={s.loaderBackground} />
      <div className={s.loader} />
    </div>
  )
}
