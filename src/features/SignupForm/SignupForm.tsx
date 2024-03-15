import { useForm, Controller } from "react-hook-form"
import { Button, Input, Link } from "components"
import { userSignup } from "store/slices/userSlice"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { FC } from "react"
import { isEmail, displayPromise } from "shared/helpers"
import cn from "classnames"
import s from "./SignupForm.module.scss"

interface LoginFormI {
  className?: string
}

interface LoginFormFieldsI {
  email: string
  password: string
  repeatPassword: string
}

export const SignupForm: FC<LoginFormI> = ({ className }) => {
  const {
    control,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<LoginFormFieldsI>()

  const dispatch = useAppDispatch()

  const onSubmit = (data: LoginFormFieldsI) => {
    const values = getValues()
    const { password, repeatPassword, email } = values

    if (password !== repeatPassword) {
      setError("password", { message: "Пароли не совпадают" })
      setError("repeatPassword", { message: "Пароли не совпадают" })
      return
    }

    if (password?.length < 8 || !password?.length) {
      setError("password", {
        message: "Длина пароля должна быть больше 8 символов!",
      })
      setError("repeatPassword", {
        message: "Длина пароля должна быть больше 8 символов!",
      })
      return
    }

    if (!isEmail(email)) {
      setError("email", { message: "Недопустимый формат Email" })
      return
    }

    dispatch(userSignup(data))
  }

  return (
    <div className={cn(s.loginForm, className)}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.inputsCnt}>
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                label='Email Address'
                value={value}
                ref={ref}
                error={errors?.email?.message}
              />
            )}
          />
          <p className={s.errorMsg}>{errors?.email?.message}</p>
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                type='password'
                label='Password'
                error={errors?.password?.message}
              />
            )}
          />
          <p className={s.errorMsg}>{errors?.password?.message}</p>
          <Controller
            control={control}
            name='repeatPassword'
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                label='Repeat password'
                type='password'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                error={errors?.repeatPassword?.message}
              />
            )}
          />
          <p className={s.errorMsg}>{errors?.repeatPassword?.message}</p>
        </div>
        <div className={s.subInputCnt}>
          <Link className={s.link} to='/login' variant='black'>
            Already have account? Login!
          </Link>
        </div>
        <div className={s.buttonsRow}>
          <Button variant='primary' type='submit' className={s.btn}>
            Sign up
          </Button>
        </div>
      </form>
    </div>
  )
}
