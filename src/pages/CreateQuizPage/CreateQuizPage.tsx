import { FC } from "react"
import s from "./CreateQuizPage.module.scss"
import { Header } from "./Header"

interface CreateQuizPageI {}
export const CreateQuizPage: FC<CreateQuizPageI> = ({}) => {
  return (
    <div className={s.createQuizPage}>
      <Header />
    </div>
  )
}
