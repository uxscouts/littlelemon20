import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../API";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES": {
      const selectedDate = new Date(action.payload);
      if (isNaN(selectedDate.getTime())) {
        return state;
      }
      return fetchAPI(selectedDate);
    }
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main role="main">
      <h1 id="booking-title">Reserve a Table</h1>
      
      <section 
        aria-live="polite" 
        aria-atomic="true"
        aria-labelledby="booking-title"
      >
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
        />
      </section>
    </main>
  );
}

export default BookingPage;