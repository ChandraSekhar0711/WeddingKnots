import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header/Header";
export function App() {
  return (
    <>
    <Header/>
    <div style={{padding: "40px"}}>
      <Outlet/>
    </div>
    </>
  );
}
