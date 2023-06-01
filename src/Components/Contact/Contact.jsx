import s from "./style.module.css"
import { ReactComponent as LogoSVG } from "../../../src/assets/images/logo.svg"

const background = <div>
    <div className="d-flex">
        <LogoSVG className={s.logo} />
        <h1 className={s.title}>KNOT</h1>
    </div>
    <p style={{ color: "white" }}>One place for the Wedding Knots</p>
</div>

export function Contact({ children }) {
    return <div className={s.root}>
        <div className={s.leftSection}>{children}</div>
        <div className={`${s.rightSection} d-none d-lg-flex`}>{background}</div>
    </div>
}