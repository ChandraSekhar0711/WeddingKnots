import { useNavigate } from "react-router-dom"
import s from "./style.module.css"
import { useEffect } from "react";
import { OrderAPI } from "../../api/fake-orders";
import { setOrderList } from "../../store/orders/order-slice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";

export function CartDetails(){
    const navigte= useNavigate();
    const dispatch = useDispatch();
    async function getOrderDetails(){
        const orders = await OrderAPI.fetchAll();
        console.log(orders);
    }
    useEffect(()=>{
       getOrderDetails();
    })
    const ordersList = useSelector((store)=>store.orderSlice.orderList);
    console.log(ordersList);
    return <>
    {ordersList}
    </>
}