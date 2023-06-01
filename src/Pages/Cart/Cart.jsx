import { useParams } from "react-router-dom"
import { fake } from "../../api/fake-backend/fake"
import s from "./style.module.css"
import { GenderFemale, GenderMale, House, Phone,SortNumericUpAlt, Watch} from "react-bootstrap-icons";
import { Lock } from "react-bootstrap-icons";
import { Input } from "../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../Components/ButtonPrimary/ButtonPrimary";
import { useEffect, useState } from "react";
import {Contact} from "../../Components/Contact/Contact";
import { TextArea } from "../../Components/TextArea/TextArea";
import { toast } from "../../Services/SweetAlert";
import { ValidatorServices } from "../../Services/validator";
export function Cart(){
    const {cardId} = useParams();
    const card = fake[cardId-1];
    console.log(card);

    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        setTimeout(() => {
          toast("warning", "Details Can Not Be Modified!");
        }, 0);
      }, []);

    const submit = (e) =>{
        e.preventDefault();
        console.log("Submit");
        if(ValidatorServices.min(message,20)){
            toast("error","Message is too short");
            navigate('/ContactUs')
        }
        else{
            toast("success","Message sent successfully");
            navigate('/')
        }
           
        
    }
    const form = (
        <div className={s.formContainer}>
          <h2 className={s.title}>
            Provide us the details <br />
            <hr />
          </h2>
          <form onSubmit={submit} className={s.formGroup}>
          <div style={{ width: "100%" }}>
              <GenderMale size={25} className={s.icon}/>
              <Input placeholder={"Groom Name"} type="text" onTextChange={setUserName} />
            </div>

            <div style={{ width: "100%" }}>
              <GenderFemale size={25} className={s.icon}/>
              <Input placeholder={"Bride Name"} type="text" onTextChange={setUserName} />
            </div>

            <div style={{ width: "100%" }}>
                <Watch size={25} className={s.icon} />
            
              <Input placeholder={"date"} type="datetime-local" onTextChange={setUserName} />
            </div>

            <div style={{ width: "100%" }}>
                <House size={25} className={s.icon} />
              <Input placeholder={"venue"} type="text" onTextChange={setUserName} />
            </div>

            <div style={{ width: "100%" }}>
                
            <Phone size={25} className={s.icon} />
              <Input placeholder={"mobile"} type="text" onTextChange={setUserName} />
            </div>

            <div style={{ width: "100%" }}>
                <SortNumericUpAlt size={25} className={s.icon} />
              <Input placeholder={"Quantity"} type="number" onTextChange={setUserName} />
            </div>
            
            <ButtonPrimary type="submit" className={s.button}>SEND</ButtonPrimary>
            
            
          </form>
        </div>
    );
    return <>
    <div className={`d-flex ${s.root}`}
            style={{backgroundImage:`url(${card.image}})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    borderRadius:"20px",
                    }} >
        <div style={{padding:"30px"}}>
        {form}
        </div>
       
    </div>
    </>
}