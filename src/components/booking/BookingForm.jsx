import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../../redux/bookings/actionCreators';

const locationOptions = [
  'Please Select',
  'Dhaka',
  'Barishal',
  'Gajipur',
  'Rajshahi',
];
const guestsOptions = ['Please Select', 1, 2, 3, 4];
const classOptions = [
  'Please Select',
  'Economy',
  'Premium Economy',
  'Business',
  'First Class',
];

const BookingForm = () => {
  const [bookingValues, setBookingValues] = useState({
    from: locationOptions[0] || '',
    to: locationOptions[0] || '',
    date: '',
    guest: guestsOptions[0] || '',
    ticketClass: classOptions[0] || '',
  });

  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  const resetForm = () => {
    setBookingValues({
      from: locationOptions[0] || '',
      to: locationOptions[0] || '',
      date: '',
      guest: guestsOptions[0] || '',
      ticketClass: classOptions[0] || '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooking(bookingValues));
    resetForm();
  };

  const handleInputChange = (e) => {
    setBookingValues({ ...bookingValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit} className="form">
        <label>
          Destination From: <br />
          <select
            name="from"
            value={bookingValues.from}
            onChange={handleInputChange}
            required
          >
            {locationOptions.map((location, index) => (
              <option
                key={location}
                value={location}
                className={index === 0 ? 'option1' : ''}
              >
                {location}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Destination To: <br />
          <select
            name="to"
            value={bookingValues.to}
            onChange={handleInputChange}
          >
            {locationOptions.map((location, index) => (
              <option
                key={location}
                value={location}
                className={index === 0 ? 'option1' : ''}
              >
                {location}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Journey Date: <br />
          <input
            type="date"
            name="date"
            value={bookingValues.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Guests: <br />
          <select
            name="guest"
            value={bookingValues.guest}
            onChange={handleInputChange}
          >
            {guestsOptions.map((guests, index) => (
              <option
                key={guests}
                value={guests}
                className={index === 0 ? 'option1' : ''}
              >
                {guests}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Class: <br />
          <select
            name="ticketClass"
            value={bookingValues.ticketClass}
            onChange={handleInputChange}
          >
            {classOptions.map((classOption, index) => (
              <option
                key={index}
                value={classOption}
                className={index === 0 ? 'option1' : ''}
              >
                {classOption}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit" disabled={bookings.length >= 5 ? true : false}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
