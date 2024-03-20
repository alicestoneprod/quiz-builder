import { FC } from "react"
import { Button, Dropdown, Link } from "components"
import { LinksRow } from "./LinksRow"
import UserIcon from "assets/icons/profile-icon.svg?react"
import s from "./Header.module.scss"
import { useAppSelector } from "shared/hooks"

interface HeaderI {}

export const Header: FC<HeaderI> = ({}) => {
  const user = useAppSelector((state) => state.user)

  if (user?.isAuth) {
    return (
      <div className={s.header}>
        <div className={s.titleLinks}>
          <div className={s.title} />
          <div className={s.linksBtns}>
            <LinksRow className={s.linksRow} />
            <div className={s.dropdownCnt}>
              <Dropdown
                icon={<UserIcon width={20} height={30} />}
                iconPosition='left'
                label={user.user.email.split("@gmail.com")[0]}
                options={[{ label: "Dashboard", value: "/dashboard" }]}
                variant='navigate'
              />
            </div>
          </div>
        </div>
        <div className={s.line} />
      </div>
    )
  }

  if (!user?.isAuth) {
    return (
      <div className={s.header}>
        <div className={s.titleLinks}>
          <div className={s.title} />
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
