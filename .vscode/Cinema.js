const saveSelectedSeats = () => {
  const allSeats = document.querySelectorAll('.seat');
  const allSeatsArray = Array.from(allSeats);
  const selectedSeats = allSeatsArray.filter(seat => seat.checked);
  const dataToSave = selectedSeats.map(seat => seat.id);
  localStorage.setItem("selected-seats", JSON.stringify(dataToSave));
  window.location.href = "Booking.html";
};

const populateSelectedSeats = () => {
  const seatsContainer = document.querySelector(".selected-seats");
  const seats = JSON.parse(localStorage.getItem("selected-seats"));

  if (seats && seats.length > 0) {
    seats.forEach(seatId => {
      seatsContainer.innerHTML += `<span class="seat-selection">${seatId}</span>`;
    });
  }
};

if (window.location.pathname.includes('Booking.html')) {
  populateSelectedSeats();
}

const confirmBooking = () => {
  const seats = JSON.parse(localStorage.getItem("selected-seats"));

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
if (bookingForm) {
  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    confirmBooking();
  });
}