import { FC } from "react"
import { Button, Link } from "components"
import { LinksRow } from "./LinksRow"
import s from "./Header.module.scss"

interface HeaderI {}

export const Header: FC<HeaderI> = ({}) => (
  <div className={s.header}>
    <div className={s.titleLinks}>
      <div className={s.title} />
      <div className={s.linksBtns}>
        <LinksRow className={s.linksRow} />
        <Link to='/login' variant='button'>
          <Button className={s.loginBtn} variant='outlined'>Login</Button>
        </Link>
      </div>
    </div>
    <div className={s.line} />
  </div>
)
