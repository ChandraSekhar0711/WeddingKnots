import s from "./style.module.css"
import { CartDetails } from "../../Components/CartDetails/CartDetails";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import { useEffect } from "react";
import { OrderAPI } from "../../api/fake-orders";
import { setOrderList } from "../../store/orders/order-slice";
export function Orders(){
    //const orderList = useSelector((store) => store.ordersSlice.orderList);
    const dispatch = useDispatch();
    const fetch = async ()=>{
        let orderList = await OrderAPI.fetchAll();
        dispatch(setOrderList(orderList));
        console.log(orderList);

    }
    useEffect(() => {
        fetch()
        //console.log(orderList); // Display the orderList data in the console
      },[]);
    return (
        <div className={`d-flex ${s.root}`}>
            <CartDetails />

        </div>);
}