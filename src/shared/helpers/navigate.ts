import { useNavigate } from "react-router-dom"

export const Navigate = (to: string) => {
  const nav = useNavigate()
  return () =>
    nav(to, {
    relative: "path",
  })
}
