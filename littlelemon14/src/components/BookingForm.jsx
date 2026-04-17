

// src/components/FormPage.jsx
import { useState } from 'react';
import { useUser } from '../context/BookingContext'; // Import custom hook

const BookingForm = () => {
  // Access the context
  const { user, updateBooking } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the context value
    updateBooking(name, email, phone, date, time);
  };

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h3>Nested FormPage Component</h3>
      <p>Current Context User:</p> 
        <p>Name: {user.name}</p> 
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Date: {user.date}</p>
        <p>Time: {user.time}</p>
        <hr/>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
         <input 
          type="text" 
          placeholder="Phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
         <input 
          type="text" 
          placeholder="Date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
          <input 
          type="text" 
          placeholder="Time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />                        
        <button type="submit">Update Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;

{/*
function BookingForm(){
  return(
    <p>BookingForm.jsx</p>
  )
}

export default BookingForm;
*/}

{/*}

function BookingForm({ availableTimes, dispatch }) {
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        // Dispatch action to update times based on selectedDate
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    return (
        <form>
            <input type="date" onChange={handleDateChange} />
            <select>
                {availableTimes.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </select>
        </form>
    );
}

export default BookingForm;

*/}
{/*
    
import React, { useState } from 'react';

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [time, setTime] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // 1. Triggers the useReducer update in the parent component
    updateTimes(selectedDate); 
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange} 
        required 
      />

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)}
        required
      >
    
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
      />

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" aria-label="On Click" />
    </form>
  );
};

export default BookingForm;

*/}