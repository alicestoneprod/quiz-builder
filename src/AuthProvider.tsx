import { FC, ReactNode, useEffect } from "react"
import { useAppDispatch } from "shared/hooks"
import { store } from "./store"
import { checkAuth } from "store/slices/userSlice"

interface AuthProviderI {
  children: ReactNode
}

// Component for checking auth state

export const AuthProvider: FC<AuthProviderI> = ({ children }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem("key")) {
      store.dispatch(checkAuth())
    }
  }, [dispatch])

  return children
}
