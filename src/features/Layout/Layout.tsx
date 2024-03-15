import { FC } from "react"
import { Outlet } from "react-router-dom"
import s from "./Layout.module.scss"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface LayoutI {}
export const Layout: FC<LayoutI> = ({}) => (
  <div className={s.layout}>
    <Header />
    <Outlet />
  </div>
)
