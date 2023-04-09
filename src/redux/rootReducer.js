import {bookingsReducer} from './bookings/bookingsReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  bookings: bookingsReducer,
})