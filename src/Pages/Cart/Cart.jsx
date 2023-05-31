import { useParams } from "react-router-dom"
import { fake } from "../../api/fake-backend/fake"
import s from "./style.module.css"
export function Cart(){
    const {cardId} = useParams();
    const card = fake[cardId-1];
    console.log(card);
    return <>
    <div className="row justify-content-center">
        <img src={card.image} alt="" className={s.image}/>
        <h3 >name : {card.title}</h3>
        <h3>price : {card.price}</h3>
        <h3>type : {card.type}</h3>
    </div>
    </>
}