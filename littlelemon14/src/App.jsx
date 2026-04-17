

import React, { useReducer } from 'react';
import BookingForm from './components/BookingForm';

// 1. Initial State
const initialState = { availableTimes: ["17:00", "18:00", "19:00"] };

// 2. Reducer Function
function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Logic to return new available times based on selected date
            return { ...state, availableTimes: ["20:00", "21:00"] };
        default:
            return state;
    }
}

function App() {
    // 3. Initialize useReducer
    const [state, dispatch] = useReducer(updateTimes, initialState);

    return (
        <BookingForm 
            availableTimes={state.availableTimes}
            dispatch={dispatch} 
        />
    );
}
export default App;