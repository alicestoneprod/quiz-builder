import { FC, useState } from "react"
import { IconButton } from "components/Button"
import ProfileIcon from "assets/icons/profile-icon.svg?react"
import { Button, Dropdown, Input, Logo } from "components"
import { dropdown__mock, dropdown__navigate_mock } from "shared/mocks/example__mocks"
import s from "./ExamplePage.module.scss"

interface ExamplePageI {}

export const ExamplePage: FC<ExamplePageI> = ({}) => {
  const [userValue, setUserValue] = useState<boolean | string>()

  const onDropdownClick = (value: string | boolean) => {
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
        icon={<ProfileIcon />}
        iconPosition='left'
        onClick={onDropdownClick}
        options={dropdown__mock}
        label='User'
      />
      <div>userDropdownValue: {userValue}</div>
      <Dropdown options={dropdown__navigate_mock} label='Navigate' variant='navigate' />
      <Logo width={200} height={80} />
    </div>
  )
}
