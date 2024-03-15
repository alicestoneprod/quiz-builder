import { FC } from "react"
import { useForm, Controller } from "react-hook-form"
import { Button, Input, Link } from "components"
import { userLogin } from "store/slices/userSlice"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { useNavigate } from "react-router-dom"
import cn from "classnames"
import s from "./LoginForm.module.scss"

interface LoginFormI {
  className?: string
}

interface LoginFormFieldsI {
  email: string
  password: string
  remember: string
}

export const LoginForm: FC<LoginFormI> = ({ className }) => {
  const { control, handleSubmit } = useForm<LoginFormFieldsI>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onSubmit = (data: LoginFormFieldsI) => {
    console.log(data)
    dispatch(userLogin(data))
  }

  return (
    <div className={cn(s.loginForm, className)}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.inputsCnt}>
          <Controller
            control={control}
            name='email'
            render={({
 field: { onChange, onBlur, value, ref } 
}) => (
  <Input
                onChange={onChange}
                onBlur={onBlur}
                label='Email Address'
                value={value}
                ref={ref}
              />
            )}
          />
          <Controller
            control={control}
            name='password'
            render={({
 field: { onChange, onBlur, value, ref } 
}) => (
  <Input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                type='password'
                label='Password'
              />
            )}
          />
        </div>
        <div className={s.subInputCnt}>
          <Controller
            control={control}
            name='remember'
            render={({
 field: { onChange, onBlur, value, ref } 
}) => (
  <Input
                label='Remember Me'
                type='checkbox'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
              />
            )}
          />
          <Link className={s.link} to='/recover'>
            Forgot password?
          </Link>
        </div>
        <div className={s.buttonsRow}>
          <Button variant='primary' type='submit'>
            Login
          </Button>
          <Button onClick={() => navigate("/signup")} variant='outlined'>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  )
}
