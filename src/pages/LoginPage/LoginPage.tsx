import { FC } from "react"
import { Logo } from "components"
import { LoginForm } from "features"
import s from "./LoginPage.module.scss"

interface LoginPageI {}

export const LoginPage: FC<LoginPageI> = ({}) => (
  <div className={s.loginPage}>
    <div className={s.loginLeft}>
      <div className={s.titleDescCnt}>
        <Logo width={250} height={60} />
        <div className={s.descCnt}>
          <p className={s.desc}>
            Welcome back!
            <br />
            Ready to dive in? Login / Sign up to get started.
            <br />
            It's like creating your own quiz!
          </p>
        </div>
      </div>
      <LoginForm />
    </div>
    <div className={s.loginRight}>
      <img className={s.img} src='/assets/icons/Graduate.png' />
    </div>
  </div>
)
