import { FC } from "react"
import s from "./Footer.module.scss"

interface FooterI {}
export const Footer: FC<FooterI> = ({}) => <div className={s.footer} />
