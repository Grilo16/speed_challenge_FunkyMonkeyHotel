import { useState } from "react";
import InputField from "./InputField";
import backEndRoutes from "../guestRepository/guest_repository";


const FormComponent = function({guests, setGuests}){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState("")


    const handleSubmit = function(e){
        e.preventDefault()
        const guestObject = { name : name, email: email, status:status }
        backEndRoutes.addGuest(guestObject)
        .then(object => setGuests([...guests, object ]))
    };

    return (
        <form onSubmit={handleSubmit} >
            <InputField label={"name"} value={name} setValue={setName}/>
            <InputField label={"email"} value={email} setValue={setEmail}/>
            <InputField label={"status"} value={status} setValue={setStatus}/>
            <button type="submit"> Add Guest </button>
            
        </form>
    )
};

export default FormComponent