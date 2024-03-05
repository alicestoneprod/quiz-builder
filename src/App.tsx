import React from "react"
import { Button, Input } from "components"
import { IconButton } from "components/Button"
import "styles/globals.scss"
import { Layout } from "./features"
import { AppRouter } from "./AppRouter"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
