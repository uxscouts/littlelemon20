import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Table } from "reactstrap";
import { useBooking } from "../context/BookingContext";

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const { booking, updateBooking } = useBooking();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      guests,
      date,
      time,
    };
    updateBooking(name, email, phone, guests, date, time);
    if (onSubmit) {
      onSubmit(formData);
    }
  };
  return (
    <>
    <div>
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Guests</th>
            <th>Date</th>
            <th>Time</th>          
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
               <td>{booking.guests}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>             
            </tr>
        </tbody>
      </Table>
    </div>

      <div className="BookingFormContainer">
        <Form
          className="BookingForm"
          aria-labelledby="booking-title"
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-required="true"
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
              aria-required="true"
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
              aria-required="true"
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
              aria-required="true"
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
              aria-required="true"
            />
          </FormGroup>
              <FormGroup>
            <Label htmlFor="time">Time</Label>  
              <div className="box">
              {availableTimes.map((timeOption) => (
                  <div key={timeOption} className="timeOptions">
                      <input
                        type="radio"
                        id={timeOption}
                        name="time"
                        value={timeOption}
                        onChange={handleTimeChange}
                        required
                        aria-required="true"
                      />
                      {timeOption}
                  </div>
                ))}
                </div>
          </FormGroup>
          <Button role="button" type="submit">submit</Button>
        </Form>
      </div>
    </div>
    </>
  );
}

export default BookingForm;
