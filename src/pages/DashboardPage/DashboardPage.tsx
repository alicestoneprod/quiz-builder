import { FC } from "react"
import s from "./DashboardPage.module.scss"

interface DashboardPageI {}
export const DashboardPage: FC<DashboardPageI> = ({}) => {
  return <div className={s.dashboardPage}>DashboardPage</div>
}
