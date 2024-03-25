import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Logo } from "components"
import AddIcon from "assets/icons/add.svg?react"
import { IconButton } from "components/Button"
import s from "./AuthHeader.module.scss"

interface AuthHeaderI {}

export const AuthHeader: FC<AuthHeaderI> = ({}) => {
  const navigate = useNavigate()
  return (
    <div className={s.authHeader}>
      <div className={s.logoCnt}>
        <Logo width={280} height={60} />
      </div>
      <div></div>
      <div className={s.buttons} onClick={() => navigate("createQuiz")}>
        <IconButton icon={<AddIcon width={16} height={16} />} position='right'>
          Create quiz
        </IconButton>
      </div>
    </div>
  )
}
