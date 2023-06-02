import { Cart2 } from "react-bootstrap-icons";
import s from "./style.module.css"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

export function Card({ title, image, price, type, onCardClick }) {
  return (
    <div className={s.container}>
      <MDBRow className='row-cols-1 g-20'>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage style={{ opacity: "10" }}
              src={image}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>{title}</MDBCardTitle>
              <MDBCardText>
                Price : {price}
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>

              <div>
                <ButtonPrimary className={s.icon} onClick={onCardClick}>
                  Add to Cart
                </ButtonPrimary>
                <Cart2 size={"30px"} className={s.icon1} />
              </div>

            </MDBCardFooter>

          </MDBCard>


        </MDBCol>
      </MDBRow>
    </div>
  );
}