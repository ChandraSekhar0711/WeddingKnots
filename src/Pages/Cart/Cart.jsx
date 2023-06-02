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
    

    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    
    useEffect(() => {
        setTimeout(() => {
          console.log(card);
          toast("warning", "Details Can Not Be Modified!");
        },);
      });
      console.log(date);
    const submit = (e) =>{
        e.preventDefault();
        console.log("Submit");
        if(ValidatorServices.min(username,10)){
          toast("error","Message is too short");
          setTimeout(()=>{
            navigate('/Card/'+cardId);
          },1000)
            
            
        }
        else{
            toast("success","Message sent successfully");
            setTimeout(()=>{
              navigate('/')
            },2000)
            
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
            
              <Input placeholder={"date"} type="datetime-local" onTextChange={setDate} />
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
              <span>{}</span>
            </div>
            
            <ButtonPrimary type="submit" className={s.button}>Submit</ButtonPrimary>
            
            
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