import s from "./style.module.css"
import { CartDetails } from "../../Components/CartDetails/CartDetails";
import { useSelector } from "react-redux";
import { store } from "../../store";
export function Orders(){
    const orders = useSelector((store) => store.ordersSlice.orderList);
    console.log(orders);
    return (
        <div className={`d-flex ${s.root}`}>
            {orders}
        </div>);
}