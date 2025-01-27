document.addEventListener('DOMContentLoaded', () => {
    const offerForm = document.getElementById('offerForm');
    const searchForm = document.getElementById('searchForm');
    const rideResults = document.getElementById('rideResults');
  
    // Save ride offer
    offerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const ride = {
        startPoint: document.getElementById('startPoint').value,
        destination: document.getElementById('destination').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        seats: document.getElementById('seats').value,
        contact: document.getElementById('contact').value,
      };
  
      // Save to local storage
      let rides = JSON.parse(localStorage.getItem('rides')) || [];
      rides.push(ride);
      localStorage.setItem('rides', JSON.stringify(rides));
  
      alert('Ride offered successfully!');
      offerForm.reset();
    });
  
    // Search for a ride
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const searchStartPoint = document.getElementById('searchStartPoint').value;
      const searchDestination = document.getElementById('searchDestination').value;
      const searchDate = document.getElementById('searchDate').value;
  
      // Fetch available rides
      let rides = JSON.parse(localStorage.getItem('rides')) || [];
      let matchedRides = rides.filter((ride) => 
        ride.startPoint === searchStartPoint && 
        ride.destination === searchDestination && 
        ride.date === searchDate
      );
  
      // Display results
      rideResults.innerHTML = '';
      if (matchedRides.length > 0) {
        matchedRides.forEach((ride) => {
          let li = document.createElement('li');
          li.innerHTML = `
            <strong>From:</strong> ${ride.startPoint} <br>
            <strong>To:</strong> ${ride.destination} <br>
            <strong>Date:</strong> ${ride.date} <br>
            <strong>Time:</strong> ${ride.time} <br>
            <strong>Seats Available:</strong> ${ride.seats} <br>
            <strong>Contact:</strong> ${ride.contact}
          `;
          rideResults.appendChild(li);
        });
      } else {
        rideResults.innerHTML = '<li>No rides found for the given criteria.</li>';
      }
    });
  });
  