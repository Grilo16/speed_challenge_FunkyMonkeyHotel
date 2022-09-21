const InputField = function({value, setValue}){

    const handleUserInput = function(e){
        setValue(e.target.value)
    };


    return (
        <input onChange={handleUserInput} type="text" value={value} />
    )
};

export default InputField