import { FC } from "react"
import { QuizCard } from "components"
import s from "./QuizezList.module.scss"

interface QuizezListI {}

export const QuizezList: FC<QuizezListI> = ({}) => {
  return (
    <div className={s.quizezList}>
      <QuizCard />
      <QuizCard />
      <QuizCard />
      <QuizCard />
    </div>
  )
}
