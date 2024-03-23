import { FC } from "react"
import s from "./GroupedQuizez.module.scss"
import { BorderedContainer, Button, QuizezList } from "components"

interface GroupedQuizezI {}
export const GroupedQuizez: FC<GroupedQuizezI> = ({}) => {
  return (
    <BorderedContainer className={s.groupedQuizez}>
      <Button className={s.button}>Узнать больше</Button>
      <div className={s.titleListCnt}>
        <p className={s.title}>Недавняя активность</p>
        <QuizezList />
      </div>
    </BorderedContainer>
  )
}
