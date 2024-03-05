import { FC } from "react"
import s from "./Layout.module.scss"
import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"

interface LayoutI {}
export const Layout: FC<LayoutI> = ({}) => {
  return (
    <>
      <div className={s.layout}>
        <Header />
        <Outlet />
      </div>
    </>
  )
}
