const GuestItem = function({guest}){
    return (

        <>
        
        <h2>Name: {guest.name}</h2>
        <h3>Email: {guest.email}</h3>
        {guest.isCheckedIn
        ? <p>Checked In</p> 
        : <p>Checked out</p>}
        
        </>
    )
};

export default GuestItem