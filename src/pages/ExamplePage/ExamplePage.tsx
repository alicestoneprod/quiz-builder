import { FC, useState } from "react"
import { IconButton } from "components/Button"
import { IconButton as NewIconButton } from "components"
import ClockIcon from "assets/icons/clock.svg?react"
import { Button, Dropdown, Input, Logo } from "components"
import { dropdown__mock, dropdown__navigate_mock } from "shared/mocks/example__mocks"
import s from "./ExamplePage.module.scss"

interface ExamplePageI {}

export const ExamplePage: FC<ExamplePageI> = ({}) => {
  const [userValue, setUserValue] = useState<string | boolean | number>()

  const onDropdownClick = (value: string | boolean | number) => {
    setUserValue(value)
  }

  return (
    <div className={s.examplePage}>
      <Button onClick={() => {}} variant='primary'>
        Type 1
      </Button>
      <Button onClick={() => {}} variant='outlined'>
        Type 1
      </Button>
      <IconButton icon='/assets/icons/Polygon.svg' onClick={() => {}} variant='text'>
        Type 1
      </IconButton>
      <IconButton
        icon='/assets/icons/Polygon.svg'
        position='right'
        onClick={() => {}}
        variant='text'>
        Type 1
      </IconButton>
      <Input value='hello' label='Email Address' onChange={() => {}} />
      <Dropdown
        icon={<ClockIcon />}
        iconPosition='left'
        onClick={onDropdownClick}
        value={userValue}
        options={dropdown__mock}
        label='User'
      />
      <div>userDropdownValue: {userValue}</div>
      <Dropdown options={dropdown__navigate_mock} label='Navigate' variant='navigate' />
      <Logo width={200} height={80} />
      <NewIconButton variant='arrow-left' hoverText='Назад' />
    </div>
  )
}
