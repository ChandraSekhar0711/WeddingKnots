import axios from "axios";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { FirebaseApp } from "../Services/firebase";

//const BASE_URL = "http://localhost:3200/orders";

export class OrderAPI{
    static async createOrder(card){
      const rersponse = await addDoc(collection(FirebaseApp.db,"orders"), card);
    return {
      id: rersponse.id,
      ...card,
    }
        //return (await axios.post(`${BASE_URL}`,card)).data;
    }
    static async fetchAll(){
        try {
            const q = query(collection(FirebaseApp.db, "orders"),orderBy("orderd_at", "asc"));
            const querySnapshot = await getDocs(q);
            const orders = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log("Fetched orders: ", orders);
            return orders;
          } catch (error) {
            console.error("Error fetching orders: ", error);
            throw error;
          }
        //return (await axios.get(`${BASE_URL}`)).data;
    }
    static async deleteById(orderId) {
      await deleteDoc(doc(FirebaseApp.db, "orders", orderId));
      }
}