import { Cart2, CartCheckFill } from "react-bootstrap-icons";
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
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { cyan } from "@mui/material/colors";
import { Add, CardGiftcardSharp, CurrencyRupee } from "@mui/icons-material";
import { ButtonGroup } from "@mui/material";

export function Cards({ title, image, price, type, onCardClick ,description}) {
  return(
    
    <Card sx={{ maxWidth: 345}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            K
          </Avatar>
        }
        
        action={
          <IconButton aria-label="settings">
            <CurrencyRupee/>{price}
          </IconButton>
        }
        title={title}
        subheader="By Wedding Wishlist"

      />
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt="Paella dish"

      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="cart">
          <CartCheckFill />
        </IconButton>
        
        <ButtonPrimary className={s.icon} onClick={onCardClick}>
                  Add to Cart
        </ButtonPrimary>
      </CardActions>
    </Card>
    
  );
}

/*return (
    <div className={s.container}>
      <MDBRow className='row-cols-1 g-20'>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage style={{ opacity: "1.5" }}
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
  );*/
  