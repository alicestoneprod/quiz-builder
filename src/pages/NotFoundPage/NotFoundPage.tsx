import { FC, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import s from "./NotFoundPage.module.scss"

interface NotFoundPageI {
  redirectPaths?: string[]
}

// TODO Design

export const NotFoundPage: FC<NotFoundPageI> = ({ redirectPaths }) => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const isRedirectNeed = redirectPaths?.find((path) => path === location.pathname)
    isRedirectNeed && navigate("/dashboard")
  }, [])

  return <div className={s.notFoundPage}>NotFoundPage</div>
}
