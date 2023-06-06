import s from "./style.module.css"
import { ReactComponent as LogoSVG } from "../../../src/assets/images/logo.svg"
export function AuthLayoyt({children,image}){
    
    return(
        <div className={s.root}>
        
        <div className={s.leftSection}>{children}</div>
        <div className={`${s.rightSection} d-none d-lg-flex`} style={{
          backgroundImage: `url(${image})`,
         backgroundPosition:"center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}></div>
    </div>
    );
}