import { useNavigate } from "react-router-dom";
import { Card, Cards } from "../../Components/Card/Card";
import { fake } from "../../api/fake-backend/fake"
import s from "./style.module.css"
export function Collection() {
    const navigate = useNavigate();
    const cards = fake;
    console.log(cards);
    return <>
        <div className={`row justify-content-center ${s.root}`}>
            {cards.map((card) => {
                return (
                    <div className={s.card_container} key={card.id}>
                        <Cards
                        title={card.title} 
                        image={card.image} 
                        price={card.price} 
                        type={card.type} 
                        description={card.description}
                        onCardClick={()=>navigate('/Card/'+ card.id)} 
                        />
                    </div>
                );
            })}
        </div>
    </>
}