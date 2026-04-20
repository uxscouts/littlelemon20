import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useUser } from '../context/BookingContext';

function BookingForm({ availableTimes, dispatch }) {
  const { user, updateBooking } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('1');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBooking(name, email, phone, guests, date, time);
  };

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h3>Reservation Form</h3>
      <p>Current Context User:</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Guests: {user.guests}</p>      
      <p>Date: {user.date}</p>
      <p>Time: {user.time}</p>
      <p>Occasion: </p>
      <hr />


<div className="BookingFormContainer">

    {/*  <form onSubmit={handleSubmit}> */}
        <Form className="BookingForm" onSubmit={handleSubmit}>

          <FormGroup>
          <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </FormGroup>

        <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </FormGroup>  

       <FormGroup>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        </FormGroup>

       <FormGroup>
        <Label htmlFor="guests">Guests</Label>
        <Input
          id="guests"
          type="number"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          required
        />
      </FormGroup>

       <FormGroup>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </FormGroup>  

      <FormGroup>
        <Label htmlFor="time">Time</Label>
        <Input type="select" name="time" id="time" value={time} onChange={handleTimeChange}>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </Input>
       </FormGroup> 

       {/* <input type="submit" value="Make Your Reservation" /> */}
        <Button type="submit">Make Your reservation</Button>
      </Form>
      </div>
    </div>
  );
}

export default BookingForm;


{/*
  <section aria-label="Booking Section" 
  class="bookingSection">
  <h2>Book Your Reservation</h2>
  <form aria-label="Booking Reservation Form" class="bookingForm">
  <div><div aria-label="First Name Container" class="container firstNameContainer">
  <label for="firstName">First Name<span aria-label="Required" class="required">*</span></label>
  <input name="firstName" aria-label="First Name Input" aria-required="true" id="firstName" autocomplete="off">
  </div><div aria-label="Last Name Container" class="container lastNameContainer">
  <label for="lastName">Last Name<span aria-label="Required" class="required">*</span>
  </label><input name="lastName" aria-label="Last Name Input" aria-required="true" id="lastName" autocomplete="off">
  </div></div><div aria-label="Date Container" class="container dateContainer">
  <label for="date">Choose Date<span aria-label="Required" class="required">*</span></label>
  <input name="date" aria-label="Date Input" aria-required="true" id="date" type="date"></div>
  <div aria-label="Time Container" class="container timeContainer">
  <label for="time">Choose Time<span aria-label="Required" class="required">*</span></label>
  <select name="time" aria-label="Select Time" aria-required="true" id="time">
  <option>17:00</option><option>17:30</option><option>19:30</option><option>20:00</option>
  <option>21:30</option><option>22:30</option><option>23:00</option><option>23:30</option></select>
  </div><div aria-label="Guest Container" class="container guestsContainer">
  <label for="guests">Number of Guests<span aria-label="Required" class="required">*</span></label>
  <input name="guests" aria-label="Guests Input" aria-required="true" id="guests" type="number" min="0" placeholder="1">
  </div><div aria-label="Occasion Container" class="container occasionContainer">
  <label for="occasion">Occasion</label><select name="occasion" aria-label="Select Occasion" id="occasion">
  <option>None</option><option>Birthday</option><option>Engagement</option><option>Anniversary</option></select>
  </div><button class="primaryBtn" text="Create Reservation" type="submit" 
  style="border: 1px solid rgb(33, 33, 33);">Create Reservation</button></form></section>
  */}



















