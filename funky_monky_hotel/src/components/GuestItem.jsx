const GuestItem = function({guest}){
    return (

        <>
        
        <h2>{guest.name}</h2>
        <h2>{guest.email}</h2>
        <h2>{guest.status}</h2>
        
        </>
    )
};

export default GuestItem