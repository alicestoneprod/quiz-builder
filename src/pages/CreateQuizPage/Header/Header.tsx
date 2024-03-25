import { FC } from "react"
import { Button, IconButton } from "components"
import SaveIcon from "assets/icons/save.svg?react"
import { IconButton as ButtonWithIcon } from "components/Button"
import s from "./Header.module.scss"

interface Header {}

export const Header: FC<Header> = ({}) => {
  return (
    <div className={s.header}>
      <div className={s.buttonQuizCnt}>
        <IconButton variant='arrow-left' hoverText='Назад' className={s.backBtn} />
        <Button variant='text' className={s.quizBtn}>
          Викторина без названия
        </Button>
      </div>
      <div className={s.rightButtons}>
        <IconButton variant='settings' hoverText='Настройки' className={s.settingsBtn} />
        <ButtonWithIcon className={s.saveBtn} icon={<SaveIcon />}>
          Публиковать
        </ButtonWithIcon>
      </div>
    </div>
  )
}
