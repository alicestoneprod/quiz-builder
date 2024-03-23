import { FC } from "react"
import s from "./DashboardPage.module.scss"
import { JoinQuizForm } from "features"
import { GroupedQuizez, Profile } from "components"

interface DashboardPageI {}
export const DashboardPage: FC<DashboardPageI> = ({}) => {
  return (
    <div className={s.dashboardPage}>
      <div className={s.profileJoinCnt}>
        <JoinQuizForm />
        <Profile />
      </div>
      <div className={s.groupedQuizez}>
        <GroupedQuizez />
        <GroupedQuizez />
        <GroupedQuizez />
        <GroupedQuizez />
      </div>
    </div>
  )
}
