import { FC } from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Link } from "components"
import cn from "classnames"
import s from "./LoginForm.module.scss"

interface LoginFormI {
  className?: string
}

export const LoginForm: FC<LoginFormI> = ({ className }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className={cn(s.loginForm, className)}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.inputsCnt}>
          <Input label='Email Address' {...register("email")} />
          <Input label='Password' {...register("password")} />
        </div>
        <div className={s.subInputCnt}>
          <Input
            label='Remember Me'
            type='checkbox'
            {...register("remember")}
          />
          <Link className={s.link} to='recover'>
            Forgot password?
          </Link>
        </div>
        <div className={s.buttonsRow}>
          <Button onClick={() => {}} variant='primary' type='submit'>
            Login
          </Button>
          <Link to='signup' variant='button'>
            <Button variant='outlined'>Sign Up</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
