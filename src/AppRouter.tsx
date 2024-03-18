import { Routes, Route } from "react-router-dom"
import { publicRoutes, privateRoutes } from "./routes"
import { NotFoundPage } from "./pages"
import { Layout } from "./features"
import { useAppSelector } from "shared/hooks"

// TODO: пофиксить 0.1секундное отображение путей, когда их нет в массиве [private/rublic]Routes.

const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth)

  if (isAuth) {
    return (
      <Routes>
        <Route path='/' Component={Layout}>
          {privateRoutes.map((route) => (
            <Route path={route.path} Component={route.page} />
          ))}
          <Route path='*' element={<NotFoundPage redirectPaths={["/login", "/signup"]} />} />
        </Route>
      </Routes>
    )
  }

  if (!isAuth) {
    return (
      <Routes>
        <Route path='/' Component={Layout}>
          {publicRoutes.map((route) => (
            <Route path={route.path} Component={route.page} />
          ))}
          <Route path='*' Component={NotFoundPage} />
        </Route>
      </Routes>
    )
  }
}

export default AppRouter
