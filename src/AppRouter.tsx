import { Routes, Route } from "react-router-dom"
import { routes } from "./routes"
import { Layout } from "./features"

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' Component={Layout}>
        {routes.map((route) => (
          <Route path={route.path} Component={route.page} />
        ))}
        <Route path='*' element={<div>Not found</div>} />
      </Route>
    </Routes>
  )
}

export default AppRouter
