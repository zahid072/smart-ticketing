const allSeats = document.querySelectorAll(".allSeats");
let setCounter = 0;
const ticketPrice = 550;
const selectSeat = [];

// --------------all seat btn function------------------
for (let seat of allSeats) {
  seat.addEventListener("click", function (e) {
    let seatName = e.target.innerText;
    if (selectSeat.includes(seatName)) {
      alert("This seat is already selected.");
    } else {
      if (selectSeat.length <= 4) {
        selectSeat.push(seatName);
      }
      if (selectSeat.length <= 4) {
        setCounter++;
        availableSeatCounter("seatsLeft");
        setSeatInfo(seatName);
        totalPrice("totalPrice", "grandTotal", ticketPrice);
        setBgColor(seatName);
      }
      document.getElementById("seatCount").innerText = setCounter;

      console.log(selectSeat);
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
