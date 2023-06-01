import { Link, useNavigate } from "react-router-dom";
import s from "./style.module.css"
export function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white " style={{padding:"30px",backgroundColor:"black"}}>
                <div className="container-fluid">
                <Link className="nav-link " to={'/'} style={{fontSize:"30px"}}>KNOT</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav"style={{fontSize:"20px"}} >
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <Link className="nav-link " to={'/'} >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={'/About'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={'/Collections'}>Collections</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={'/ContactUs'}>ContactUs</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to={'/Orders'}>Orders</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}