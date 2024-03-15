import { FC } from "react"
import { routes } from "routes/routes"
import { Link } from "components/Link"
import cn from "classnames"
import s from "./LinksRow.module.scss"

interface LinksRowI {
  className?: string
}
export const LinksRow: FC<LinksRowI> = ({ className }) => (
  <div className={cn(s.linksRow, className)}>
    {routes.map((route) => (
      <Link variant='nav' to={route.path}>
        {route.name}
      </Link>
    ))}
  </div>
)
