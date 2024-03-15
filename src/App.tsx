import { BrowserRouter } from "react-router-dom"
import React from "react"
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
          <React.StrictMode>
            <Toaster position='top-right' toastOptions={{ duration: 6000 }} />
            <Loader />
            <AppRouter />
          </React.StrictMode>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
