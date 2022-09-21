import { useEffect, useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import GuestList from './components/GuestList';
import InputField from './components/InputField';
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
          <FormComponent guests={guests} setGuests={setGuests}/>
          <GuestList guests={guests} setGuests={setGuests}/>
        </div>
  );
}

export default App;
