import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css"
import { useParams } from "react-router-dom";
export function OrdersCard({cardName,image,onTrashClick,orderplace,quantity,price}){
    function onTrashClick_(e){
        onTrashClick();
         e.stopPropagation();
    }
    return (
        <div className={s.container}>
            <div className="card bg-dark text-white">
        <img src={image} className="card-img" alt="..." style={{opacity:"0.4"}}/>
        <div className="card-img-overlay">
          <h5 className="card-title">{cardName}</h5>
          <p className="card-text">OrderedDate : {orderplace}</p>
          <p className="card-text">Quantity : {quantity}</p>
          <p className="card-text">Price : {price}</p>
          <Trash size={20} className={s.icon} onClick={onTrashClick_}/>
        </div>
        
      </div>
      
        </div>
        
    );
}