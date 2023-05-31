import { Cart2 } from "react-bootstrap-icons";
import s from "./style.module.css"
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardOverlay,
    MDBCardImage
  } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
  
export function Card({ title, image, price, type, onCardClick }) {
    return (
        <div className={s.container}>
            <MDBCard background='dark' className='text-white'>
                <MDBCardImage overlay src={image} alt='...' />
                <MDBCardOverlay>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>Price : {price}</MDBCardText>
                    <MDBCardText>Type : {type}</MDBCardText>
                    <Cart2 size={"25px"} className={s.icon} onClick={onCardClick}/>
                  
                   
                </MDBCardOverlay>
                
            </MDBCard>
        </div>
    );
}