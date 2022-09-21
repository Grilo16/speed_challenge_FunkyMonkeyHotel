import backEndRoutes from "../guestRepository/guest_repository";
import GuestItem from "./GuestItem";

const GuestList = function({guests, setGuests}){

    const handleRemoveGuest = function(guest){
        backEndRoutes.removeGuestById(guest._id)
        .then((newGuests) => {setGuests(newGuests)})
    };

    const handleChangeStatus = function(guest){
        let newStatus = {}
        guest.isCheckedIn
        ? newStatus = {isCheckedIn : false}
        : newStatus = {isCheckedIn : true }
        backEndRoutes.editGuestById(guest._id, newStatus)
        .then(guests => setGuests(guests))

    }

    const displayGuests = guests.map((guest)=>{
        return (
            <li key={guest._id} >
             <GuestItem guest={guest}  />
             <button onClick={()=>handleRemoveGuest(guest)}>Remove Guest</button>
             <button onClick={()=>handleChangeStatus(guest)}>Change Status</button>
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