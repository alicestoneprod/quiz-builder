import { FC } from "react"
import { BorderedContainer } from "components"
import { useAppSelector } from "shared/hooks"
import s from "./Profile.module.scss"

interface ProfileI {}
export const Profile: FC<ProfileI> = ({}) => {
  const email = useAppSelector((state) => state.user.user.email)
  return (
    <BorderedContainer className={s.profileWrapper}>
      <div className={s.textAvatarCnt}>
        <p className={s.greetText}>
          Hello,
          <br />
          {email.split("@gmail.com")[0].slice(0, 10)}
        </p>
        <img src='assets/icons/profile-icon.png' alt='profile-icon' />
      </div>
      <img src='assets/icons/settings.png' alt='settings-icon' className={s.icon} />
    </BorderedContainer>
  )
}
