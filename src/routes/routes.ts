import { AboutPage, DashboardPage, ExamplePage, IndexPage, LoginPage, SignupPage } from "pages"

export const headerRoutes = [
  {
    path: "/work",
    name: "How it works?",
    page: AboutPage,
  },
  {
    path: "/features",
    name: "Features",
    page: AboutPage,
  },
  {
    path: "/about",
    name: "About Us",
    page: AboutPage,
  },
]

export const publicRoutes = [
  { path: "/", name: "Index", page: IndexPage },
  {
    path: "/work",
    name: "How it works?",
    page: AboutPage,
  },
  {
    path: "/features",
    name: "Features",
    page: AboutPage,
  },
  {
    path: "/about",
    name: "About Us",
    page: AboutPage,
  },
  {
    path: "/example",
    name: "Example",
    page: ExamplePage,
  },
  {
    path: "/login",
    name: "Login",
    page: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    page: SignupPage,
  },
]

export const privateRoutes = [
  { path: "/", name: "Index", page: IndexPage },
  {
    path: "/work",
    name: "How it works?",
    page: AboutPage,
  },
  {
    path: "/features",
    name: "Features",
    page: AboutPage,
  },
  {
    path: "/about",
    name: "About Us",
    page: AboutPage,
  },
  {
    path: "/example",
    name: "Example",
    page: ExamplePage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    page: DashboardPage,
  },
]
