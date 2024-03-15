import { FC } from "react"
import { IconButton } from "components/Button"
import { Button, Input } from "components"
import s from "./ExamplePage.module.scss"

interface ExamplePageI {}
export const ExamplePage: FC<ExamplePageI> = ({}) => (
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
    <IconButton icon='/assets/icons/Polygon.svg' position='right' onClick={() => {}} variant='text'
    >
      Type 1
    </IconButton>
    <Input value='hello' label='Email Address' onChange={() => {}} />
  </div>
)
