import axios from "axios";

const BASE_URL = "http://localhost:3200/orders";

export class OrderAPI{
    static async createOrder(card){
        return (await axios.post(`${BASE_URL}`,card)).data;
    }
    static async fetchAll(){
        return (await axios.get(`${BASE_URL}`)).data;
    }
}