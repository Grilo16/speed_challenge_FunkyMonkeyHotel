import { useEffect, useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import GuestList from './components/GuestList';
import backEndRoutes from './guestRepository/guest_repository';

function App() {


  const [guests, setGuests] = useState([])

  useEffect(()=>{
    backEndRoutes.getAllGuests()
    .then(setGuests)
  }, [])

  const getGuestToEdit = function(guest){
      return guest
  }

  return (
        <div className="main-container">
          <h1>Welcome to Hotel Funkey Monkey</h1>
          <hr />
          <FormComponent guests={guests} setGuests={setGuests}/>
          <GuestList getGuestToEdit={getGuestToEdit} guests={guests} setGuests={setGuests}/>
        </div>
  );
}

export default App;
