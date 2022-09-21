const GuestItem = function({guest}){
    return (

        <>
        
        <h2>{guest.name}</h2>
        <h2>{guest.email}</h2>
        {guest.isCheckedIn
        ? <p>Checked In</p> 
        : <p>Checked out</p>}
        
        </>
    )
};

export default GuestItem