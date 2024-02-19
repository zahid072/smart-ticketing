const allSeats = document.querySelectorAll(".allSeats");
let setCounter = 0;
const ticketPrice = 550;
let selectSeat = [];
const bookedSeat = [];

// --------------all seat btn function------------------
for (let seat of allSeats) {
  seat.addEventListener("click", function (e) {
    let seatName = e.target.innerText;
    // check already booked seat
    if (bookedSeat.includes(seatName)) {
      alert("This seat is already booked.");
    } else if (selectSeat.includes(seatName)) {
      //check selected seat
      alert("This seat is already selected.");
    } else {
      if (setCounter < 4) {
        setCounter++;
        selectSeat.push(seatName);
        availableSeatCounter("seatsLeft");
        setSeatInfo(seatName);
        totalPrice("totalPrice", "grandTotal", ticketPrice);
      }
      document.getElementById("seatCount").innerText = setCounter;
      console.log(selectSeat);
    }
    for (let clickedSeat of selectSeat) {
      setBgColor(clickedSeat);
    }

    if (setCounter >= 3) {
      const applyBtn = document.getElementById("applyBtn");
      applyBtn.removeAttribute("disabled");
    }
  });
}

// --------------Coupon apply btn function------------------
function applyBtn() {
  const container = document.getElementById("couponContainer");
  setDiscount(container);
}

// --------------Banner section buy ticket btn function------------------
function buyTicket() {
  const buyTicketSection = document.getElementById("buyTicket");
  buyTicketSection.scrollIntoView({ behavior: "smooth" });
}
// --------------Modal function-------------
function nextBtn() {
  showModal();
}
// modal continue btn
document.getElementById("continueBtn").addEventListener("click", function () {
  for (let clickedSeat of selectSeat) {
    bookedSeat.push(clickedSeat);
    setBgColorTotalSeat(clickedSeat);
  }
  selectSeat = [];
  setCounter = 0;
  modal.style.display = "none";
});
