import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    
    // Fetch bookings data from the server and update the state
    useEffect(() => {
      axios.get('/api/bookings')  // Adjust the API endpoint according to your server setup
        .then(response => {
          setBookings(response.data);
        })
        .catch(error => {
          console.error('Error fetching bookings:', error);
        });
    }, []);
    
    return (
      <div>
        {/* Render the bookings data */}
      </div>
    );
  }

//   Add the necessary markup and styling to display the bookings data in the component's return statement. For example:

return (
  <div>
    <h1>My Bookings</h1>
    <ul>
      {bookings.map(booking => (
        <li key={booking.id}>
          <p>Package: {booking.packageName}</p>
          <p>Date: {booking.date}</p>
          {/* Add other booking details as needed */}
        </li>
      ))}
    </ul>
  </div>
);