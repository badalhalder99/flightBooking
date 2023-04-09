import { ADD_BOOKING, DELETE_BOOKING } from './actionTypes';

//Add Booking
export const addBooking = (bookingData) => {
  return {
    type: ADD_BOOKING,
    payload: bookingData,
  };
};

//Delete Booking
export const deleteBooking = (bookingId) => {
  return {
    type: DELETE_BOOKING,
    payload: bookingId,
  };
};
