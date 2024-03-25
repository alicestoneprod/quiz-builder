import { FC } from "react"
import { Button, Link, Logo } from "components"
import { LinksRow } from "./LinksRow"
import s from "./Header.module.scss"
import { useAppSelector } from "shared/hooks"
import { useLocation } from "react-router-dom"
import { AuthHeader } from "./AuthHeader"

interface HeaderI {}

export const Header: FC<HeaderI> = ({}) => {
  const user = useAppSelector((state) => state.user)
  const location = useLocation()

  if (
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/createQuiz"
  ) {
    return
  }

  if (user?.isAuth) {
    return <AuthHeader />
  }

  if (!user?.isAuth) {
    return (
      <div className={s.header}>
        <div className={s.titleLinks}>
          <Logo width={254} height={60} />
          <div className={s.linksBtns}>
            <LinksRow className={s.linksRow} />
            <Link to='/login' variant='button'>
              <Button className={s.loginBtn} variant='outlined'>
                Login
              </Button>
            </Link>
          </div>
        </div>
        <div className={s.line} />
      </div>
    )
  }
}
