import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking } from '../../redux/bookings/actionCreators';
import { Table } from 'reactstrap';

const BookingList = () => {
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBooking(id));
  };
  
  const result = bookings.length > 0 && (
    <Table responsive>
      <thead>
        <tr>
          <th>Destination From</th>
          <th>Destination To</th>
          <th>Date</th>
          <th>Guests</th>
          <th>Class</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking, index) => (
          <tr key={index} scope="row">
            <td>{booking.from}</td>
            <td>{booking.to}</td>
            <td>{booking.date}</td>
            <td>{booking.guest}</td>
            <td>{booking.ticketClass}</td>
            <td>
              <button onClick={() => handleDelete(booking.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
  return result;
};
export default BookingList;