import { useEffect, useState } from 'react';
import './App.css';
import GuestList from './components/GuestList';
import backEndRoutes from './guestRepository/guest_repository';

function App() {


  const [guests, setGuests] = useState([])

  useEffect(()=>{
    backEndRoutes.getAllGuests()
    .then(setGuests)
  }, [])


  return (
        <div className="main-container">
          <h2>front end begins here</h2>
          <GuestList guests={guests} setGuests={setGuests}/>
        </div>
  );
}

export default App;
