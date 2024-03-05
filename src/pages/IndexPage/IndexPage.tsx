import { FC } from "react"
import { LandingIntro } from "features/LandingIntro"
import s from "./IndexPage.module.scss"

interface IndexPageI {}
export const IndexPage: FC<IndexPageI> = ({}) => {
  return (
    <div className={s.indexPage}>
      <LandingIntro />
    </div>
  )
}
