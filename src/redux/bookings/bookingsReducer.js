import { initialState } from './initialState';
import { ADD_BOOKING, DELETE_BOOKING } from './actionTypes';

export const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING: {
      if (state.length > 5) {
        return state;
      }
      return [...state, { id: Date.now(), ...action.payload }];
      // return [...state, { id: Date.now() + Math.random(), ...action.payload }];
      //This is good practice for creating a unique id.Example is given below:
      // id: Date.now() + Math.random()
    }
    case DELETE_BOOKING: {
      return state.filter((booking) => booking.id !== action.payload);
    }
    default:
      return state;
  }
};
