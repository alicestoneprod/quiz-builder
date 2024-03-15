import { FC, ReactNode, useEffect } from "react"
import { useAppDispatch } from "shared/hooks"
import { checkAuth } from "store/slices/userSlice"
import { store } from "./store"

interface AuthProviderI {
  children: ReactNode
}

// Component for checking auth state

export const AuthProvider: FC<AuthProviderI> = ({ children }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.dispatch(checkAuth())
    }
  }, [dispatch])

  return children
}
