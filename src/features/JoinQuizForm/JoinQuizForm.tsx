import { FC } from "react"
import { useForm, Controller } from "react-hook-form"
import { BorderedContainer, Button, Input } from "components"
import s from "./JoinQuizForm.module.scss"

interface JuinQuizFieldsI {
  id: string
}

interface JoinQuizFormI {}
export const JoinQuizForm: FC<JoinQuizFormI> = ({}) => {
  const { control, handleSubmit } = useForm<JuinQuizFieldsI>()
  const onSubmit = (data: JuinQuizFieldsI) => {
    
  }

  return (
    <BorderedContainer className={s.formWrapper}>
      <label className={s.label}>Write quiz code</label>
      <div className={s.formCnt}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <Controller
            control={control}
            name='id'
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                type='id'
                label='Quiz ID'
                placeholder='Write quiz ID here'
              />
            )}
          />
          <Button>Start</Button>
        </form>
      </div>
    </BorderedContainer>
  )
}
