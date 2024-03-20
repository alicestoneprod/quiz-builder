import { FC } from "react"
import { BorderedText, Button, Title } from "components"
import { IconButton } from "components/Button"
import ArrowIcon from "assets/icons/polygon.svg?react"
import s from "./LandingIntro.module.scss"

interface LandingIntroI {}
export const LandingIntro: FC<LandingIntroI> = ({}) => (
  <div className={s.landingIntro}>
    <div className={s.landingInfoLeft}>
      <div className={s.titleDesc}>
        <Title>
          Learn
          <br />
          new concepts
          <br />
          for each question
        </Title>
        <BorderedText>We help you prepare for exams and quizes</BorderedText>
      </div>
      <div className={s.buttons}>
        <Button onClick={() => {}}>Start solving</Button>
        <IconButton
          variant='text'
          position='left'
          onClick={() => {}}
          icon={<ArrowIcon width={16} height={16} />}>
          know more
        </IconButton>
      </div>
    </div>
    <div className={s.landingInfoRight}>
      <div className={s.rightImg} />
    </div>
  </div>
)
