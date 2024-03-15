import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "store"
import { Loader, Toaster } from "components"
import { AppRouter } from "./AppRouter"
import "styles/globals.scss"
import { AuthProvider } from "./AuthProvider"

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <Toaster position='top-right' toastOptions={{ duration: 6000 }} />
          <Loader />
          <AppRouter />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
