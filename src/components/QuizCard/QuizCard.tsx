import { FC } from "react"
import s from "./QuizCard.module.scss"
import { CardLabel } from "./CardLabel"

interface QuizCardI {}

export const QuizCard: FC<QuizCardI> = ({}) => {
  return (
    <div className={s.quizCard}>
      <img src='/assets/card/mock.jpg' alt='quiz-card-icon' className={s.icon} />
      <div className={s.labelsList}>
        <CardLabel>N вопросов</CardLabel>
        <CardLabel>4/5 оценка</CardLabel>
        <CardLabel>N сыграли</CardLabel>
      </div>
      <div className={s.titleCnt}>
        <p className={s.title}>5 вопросов по игре Dragon Nest</p>
      </div>
    </div>
  )
}
