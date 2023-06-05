import { Link, useNavigate } from "react-router-dom"
import s from "./style.module.css"
import { useEffect } from "react";
import { OrderAPI } from "../../api/fake-orders";
import { setOrderList } from "../../store/orders/order-slice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import { OrdersCard } from "../OrdersCard/OrdrersCard";
import { deleteOrder } from "../../store/orders/order-slice";
import { toast } from "../../Services/SweetAlert";

export function CartDetails(){
    const navigte= useNavigate();
    const dispatch = useDispatch();
    function orderDelete(order){
        if(window.confirm(`Do You really want to delete the order?`)){
            try{
                OrderAPI.deleteById(order.id);
                dispatch(deleteOrder(order));
                toast("success", "Order deleted successfully");
                setTimeout(()=>{
                    navigte('/Orders')
                },2000)
            }catch(err){
                toast("error", "couldn't delete order");
            }
            
            
        }

    }
   const ordersList = useSelector((store)=>store.orderSlice.orderList);
    
    return <>
    
    <div className={`row justify-content-center ${s.root}`}>
            {ordersList?.length === 0 && (

        <div className="d-flex justify-content-center">
        <span>
            You don't have any orders, Check our {" "}
            <Link to="/Collections">Collections</Link> </span></div>
        )}
            {ordersList.map((order) => {
                return (
                    <div className={s.card_container} key={order.id}>
                        <OrdersCard 
                            cardName = {order.designName}
                            orderplace={order.orderd_at}
                            image={order.image_src}
                            quantity = {order.Quantity}
                            price = {order.price}
                            onTrashClick = {()=>orderDelete(order)}
                        />
                    </div>
                );
            })}
        </div>
    </>
}