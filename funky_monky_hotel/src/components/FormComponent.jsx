import { useState } from "react";
import InputField from "./InputField";
import backEndRoutes from "../guestRepository/guest_repository";


const FormComponent = function({guests, setGuests}){

    const [name, setName] = useState("")


    const handleSubmit = function(e){
        e.preventDefault()
        const guestObject = { name : name }
        backEndRoutes.addGuest(guestObject)
        .then(object => setGuests([...guests, object ]))
    };

    return (
        <form onSubmit={handleSubmit} >
            <InputField value={name} setValue={setName}/>
            <button type="submit"> Add Guest </button>
            
        </form>
    )
};

export default FormComponent