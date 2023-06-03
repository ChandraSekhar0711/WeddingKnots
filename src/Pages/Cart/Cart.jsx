import { useParams } from "react-router-dom";
import { fake } from "../../api/fake-backend/fake";
import s from "./style.module.css";
import { GenderFemale, GenderMale, House, Phone, SortNumericUpAlt, Watch } from "react-bootstrap-icons";
import { Input } from "../../Components/Input/Input";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../Components/ButtonPrimary/ButtonPrimary";
import { useEffect, useState } from "react";
import { toast } from "../../Services/SweetAlert";
import { ValidatorServices } from "../../Services/validator";
import { OrderAPI } from "../../api/fake-orders";
import { useDispatch } from "react-redux";
import { createOrder } from "../../store/orders/order-slice";

export function Cart() {
  const { cardId } = useParams();
  const card = fake[cardId - 1];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      toast("warning", "Details Can Not Be Modified!");
    }, []);
  }, []);

  useEffect(() =>{
    // Recalculate total price whenever quantity changes
    const calculateTotalPrice = () => {
      const pricePerUnit = 10; // Assuming the price per unit is $10
      const totalPrice = quantity * card.price;
      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  },[quantity]);
  const submit = async (e) => {
    e.preventDefault();
    alert(JSON.stringify({title:username}));
    const createOrders = await OrderAPI.createOrder({title:username,orderd_at:new Date().toLocaleDateString()});
    dispatch(createOrder(createOrders));

    if (ValidatorServices.min(username, 10)) {
      toast("error", "Message is too short");
      setTimeout(() => {
        navigate("/Card/" + cardId);
      }, 1000);
    } else {
      toast("success", "Details have been submitted successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Provide us the details
        <br />
        <hr />
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <div style={{ width: "100%" }}>
          <GenderMale size={25} className={s.icon} />
          <Input placeholder={"Groom Name"} type="text" onTextChange={setUserName} />
        </div>

        <div style={{ width: "100%" }}>
          <GenderFemale size={25} className={s.icon} />
          <Input placeholder={"Bride Name"} type="text" onTextChange={setDate} />
        </div>

        <div style={{ width: "100%" }}>
          <Watch size={25} className={s.icon} />
          <Input placeholder={"Date"} type="datetime-local" onTextChange={setDate} />
        </div>

        <div style={{ width: "100%" }}>
          <House size={25} className={s.icon} />
          <Input placeholder={"Venue"} type="text" onTextChange={setDate} />
        </div>

        <div style={{ width: "100%" }}>
          <Phone size={25} className={s.icon} />
          <Input placeholder={"Mobile"} type="text" size={"10"} onTextChange={setDate} />
        </div>

        <div style={{ width: "100%" }}>
          <SortNumericUpAlt size={25} className={s.icon} />
          <Input placeholder={"Quantity"} type="number" onTextChange={setQuantity} />
        </div>

        <div style={{ width: "100%" }}>
          <span className={s.icon} >Price : </span>
          <Input
            placeholder={"Price"}
            type="text"
            onTextChange={setTotalPrice}
            value={totalPrice}
            isEditable={false}
          />
        </div>

        <ButtonPrimary type="submit" className={s.button}>
          Submit
        </ButtonPrimary>
      </form>
    </div>
  );

  return (
    <>
      <div
        className={`d-flex ${s.root}`}
        style={{
          backgroundImage: `url(${card.image}})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "20px",
        }}
      >
        <div style={{ padding: "30px" }}>{form}</div>
      </div>
    </>
  );
}
