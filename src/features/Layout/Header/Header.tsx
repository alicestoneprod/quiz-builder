import { FC } from "react"
import { LinksRow } from "./LinksRow"
import { Button, Link } from "components"
import s from "./Header.module.scss"

interface HeaderI {}

export const Header: FC<HeaderI> = ({}) => {
  return (
    <>
      <div className={s.header}>
        <div className={s.titleLinks}>
          <div className={s.title}></div>
          <div className={s.linksBtns}>
            <LinksRow className={s.linksRow} />
            <Link to='login' variant='button'>
              <Button variant='outlined'>Login</Button>
            </Link>
          </div>
        </div>
        <div className={s.line} />
      </div>
    </>
  )
}
