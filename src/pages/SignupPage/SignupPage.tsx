import { FC } from "react"
import { SignupForm } from "features"
import { Logo } from "components"
import s from "./SignupPage.module.scss"

interface SignupPageI {}

export const SignupPage: FC<SignupPageI> = ({}) => (
  <div className={s.loginPage}>
    <div className={s.loginLeft}>
      <div className={s.titleDescCnt}>
        <Logo width={250} height={60} />
        <div className={s.descCnt}>
          <p className={s.desc}>
            Hey there!
            <br />
            Let's sign up~
            <br />
            It's like unlocking a whole new world!
          </p>
        </div>
      </div>
      <SignupForm />
    </div>
    <div className={s.loginRight}>
      <img className={s.img} src='/assets/icons/Graduate.png' />
    </div>
  </div>
)
