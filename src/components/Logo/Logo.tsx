import { FC } from "react"
import { Link } from "components"
import LogoIcon from "assets/icons/logo.svg?react"

interface LogoI {
  width: number
  height: number
}

export const Logo: FC<LogoI> = (props) => {
  return (
    <Link to='/'>
      <LogoIcon {...props} />
    </Link>
  )
}
