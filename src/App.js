import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import BookingForm from './components/booking/BookingForm';
import BookingList from './components/booking/BookingList';
import { Container } from 'reactstrap';

const App = () => (
  <Provider store={store}>
    <Container>
      <BookingForm />
      <BookingList />
    </Container>
  </Provider>
);
export default App;
