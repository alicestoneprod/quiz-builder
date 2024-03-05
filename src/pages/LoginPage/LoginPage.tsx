import { FC } from "react"
import { LoginForm } from "features"
import s from "./LoginPage.module.scss"

interface LoginPageI {}

export const LoginPage: FC<LoginPageI> = ({}) => {
  return (
    <div className={s.loginPage}>
      <div className={s.loginLeft}>
        <div className={s.titleDescCnt}>
          <div className={s.title} />
          <div className={s.descCnt}>
            <p className={s.desc}>
              Welcome back!
              <br />
              Please Login / Sign up to your account.
            </p>
          </div>
        </div>
        <LoginForm />
      </div>
      <div className={s.loginRight}>
        <img className={s.img} src='/assets/icons/Graduate.png'></img>
      </div>
    </div>
  )
}
