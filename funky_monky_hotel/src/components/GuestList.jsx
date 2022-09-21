import GuestItem from "./GuestItem";

const GuestList = function({guests, setGuests}){

    const displayGuests = guests.map((guest)=>{
        return (
            <li key={guest._id} >
             <GuestItem guest={guest}  />
            </li>           


        )
    })



    return (
        <div className="guest-list">
        <ul>
            {displayGuests}
        </ul>
        </div>

    )
};

export default GuestList