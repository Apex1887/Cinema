document.addEventListener("DOMContentLoaded", function() {
  
  const saveSelectedSeats = () => {
    
    const allSeats = document.querySelectorAll('.seat');
    const allSeatsArray = Array.from(allSeats);   
    const Seats = allSeatsArray.filter(seat => seat.checked);   
    const dataToSave = Seats.map(seat => seat.id);
    localStorage.setItem("seats", JSON.stringify(dataToSave));
    window.location.href = "Booking.html";
  };
  
  s
  const populateSelectedSeats = () => {
    const SeatsContainer = document.querySelector(".seats");
    const seats = JSON.parse(localStorage.getItem("seats"));
    
    if (seats && seats.length > 0) {
      seats.forEach(seatId => {
        SeatsContainer.innerHTML += `<span class="seat-selection">${seatId}</span>`;
      });
    }
    console.log({ selectedSeats, seats });
  };
  
  
  const confirmBooking = () => {
    const seats = JSON.parse(localStorage.getItem("seats"));
  
    const nameInput = document.querySelector("input[placeholder='Full Name']").value;
    const emailInput = document.querySelector("input[placeholder='Email']").value;
    const numberInput = document.querySelector("input[placeholder='Phone number']").value;
  
    
    const bookingConfirmation = document.createElement("div");
    bookingConfirmation.classList.add("booking-confirmation");
    bookingConfirmation.innerHTML = `
      <h2>Your booking is confirmed!</h2>
      <p>Full Name: ${nameInput}</p>
      <p>Email: ${emailInput}</p>
      <p>Phone Number: ${numberInput}</p>
      <p>Seats: ${seats.join(", ")}</p>
    `;
  
    document.body.appendChild(bookingConfirmation);
  };
  
  
  const bookingForm = document.getElementById("confirmBooking");
  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    saveSelectedSeats();
  });
  
  
  populateSelectedSeats();
}); 