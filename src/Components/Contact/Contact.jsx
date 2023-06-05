import s from "./style.module.css"
import { ReactComponent as LogoSVG } from "../../../src/assets/images/logo.svg"
import { Facebook, Instagram, Mailbox2, Messenger, Twitter } from "react-bootstrap-icons"
import { Email, Home, Phone } from "@mui/icons-material"


const background = <div>
    <div className="d-flex">
        <LogoSVG className={s.logo} />
        <h1 className={s.title}>KNOT</h1>
    </div>
    <p style={{ color: "white" }}>One place for the Wedding Knots</p>
</div>

export function Contact() {
    return <>
        <div className={s.contactSection}>
        <section className="contact-section bg-light py-2">
      <div className={s.container}>
        <h2 className="section-title text-center mb-4">Contact Us</h2>
        <div className={`row ${s.row}`}>
          <div className="col-lg-6">
          <p className="inquiry-message">
              For any inquiries or feedback, please reach out to us:
            </p>
            <ul className="list-unstyled">
              <li className={s.contactItem}>
                <Email/> example@example.com
              </li>
              <li className={s.contactItem}>
                <Phone/> +1234567890
              </li>
              <li className={s.contactItem}>
                <Home/> 123 Main Street, City, Country
              </li>
            </ul>
            <div className={s.socialLinks}>
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-facebook-square ${s.socialIcon}`}></i>
              <Facebook/>
            </a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-instagram ${s.socialIcon}`}></i>
              <Instagram/>
            </a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-instagram ${s.socialIcon}`}></i>
              <Twitter/>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
       
        
    </div>
    </>
}