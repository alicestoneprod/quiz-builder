import { AboutPage, ExamplePage, IndexPage, LoginPage } from "pages"

export const routes = [
  { path: "/", name: "Index", page: IndexPage },
  {
    path: "work",
    name: "How it works?",
    page: AboutPage,
  },
  {
    path: "features",
    name: "Features",
    page: AboutPage,
  },
  {
    path: "about",
    name: "About Us",
    page: AboutPage,
  },
  {
    path: "example",
    name: "Example",
    page: ExamplePage,
  },
  {
    path: "login",
    name: "Login",
    page: LoginPage,
  },
]
