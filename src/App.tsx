import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "store"
import { Loader, Toaster } from "components"
import AppRouter from "./AppRouter"
import { AuthProvider } from "./AuthProvider"
import "styles/globals.scss"

function App() {
  return (
    <BrowserRouter basename='/'>
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
