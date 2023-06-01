import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import s from "./style.module.css"
export function App() {
  return (
    <>
    <Header/>
    
    <div className={s.workspace}>
      <Outlet/>
    </div>
  
    
    </>
  );
}
