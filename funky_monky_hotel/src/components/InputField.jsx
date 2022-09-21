const InputField = function({value, setValue, label}){

    const handleUserInput = function(e){
        setValue(e.target.value)
    };


    return (
        <>
        <label htmlFor={label}>{label}</label>
        <input id={label} onChange={handleUserInput} type="text" value={value} />
        </>
    )
};

export default InputField