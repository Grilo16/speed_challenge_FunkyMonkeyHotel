import { useState } from "react";
import InputField from "./InputField";
import backEndRoutes from "../guestRepository/guest_repository";


const FormComponent = function({guests, setGuests}){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")


    const handleSubmit = function(e){
        e.preventDefault()
        if (!name || !email){
            return
        }
        const guestObject = { name : name, email: email, isCheckedIn: false }
        backEndRoutes.addGuest(guestObject)
        .then(object => setGuests([...guests, object ]))
    };

    return (
        
        <div className="add-user-form">
            <h3>Add a new guest</h3>
        <form onSubmit={handleSubmit} >
            <InputField label={"name"} value={name} setValue={setName}/>
            <br />
            <InputField label={"email"} value={email} setValue={setEmail}/>
            <br />
            <button type="submit"> Add Guest </button>
        </form>
        </div>
            
    )
};

export default FormComponent