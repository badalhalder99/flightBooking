import { initialState } from './initialState';
import { ADD_BOOKING, DELETE_BOOKING } from './actionTypes';

export const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING: {
      if (state.length > 5) {
        return state;
      }
      return [...state, { id: Date.now(), ...action.payload }];
    }
    case DELETE_BOOKING: {
      return state.filter((booking) => booking.id !== action.payload);
    }
    default:
      return state;
  }
};
