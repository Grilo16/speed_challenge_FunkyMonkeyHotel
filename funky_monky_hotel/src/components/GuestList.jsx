import backEndRoutes from "../guestRepository/guest_repository";
import GuestItem from "./GuestItem";

const GuestList = function({guests, setGuests}){

    const handleRemoveGuest = function(guest){
        backEndRoutes.removeGuestById(guest._id)
        .then((newGuests) => {setGuests(newGuests)})
    };

    const displayGuests = guests.map((guest)=>{
        return (
            <li key={guest._id} >
             <GuestItem guest={guest}  />
             <button onClick={()=>handleRemoveGuest(guest)}>Remove Guest</button>
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