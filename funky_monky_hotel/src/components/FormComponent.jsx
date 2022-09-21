import { useState } from "react";
import InputField from "./InputField";


const FormComponent = function(){

    const [name, setName] = useState("")




    return (
        <form action="">
            <InputField value={name} setValue={setName}/>
            
        </form>
    )
};

export default FormComponent