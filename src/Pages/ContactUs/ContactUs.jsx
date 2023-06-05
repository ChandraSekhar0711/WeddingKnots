import { Person} from "react-bootstrap-icons";
import { Lock } from "react-bootstrap-icons";
import s from "./style.module.css"
import { Input } from "../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../Components/ButtonPrimary/ButtonPrimary";
import { useState } from "react";
import {Contact} from "../../Components/Contact/Contact";
import { TextArea } from "../../Components/TextArea/TextArea";
import { toast } from "../../Services/SweetAlert";
import { ValidatorServices } from "../../Services/validator";

export function ContactUs(){
    /*const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
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
    */
    return (
      <Contact />
    )
}