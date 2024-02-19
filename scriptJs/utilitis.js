// set seat btn background color
function setBgColor(seatId) {
  const seat = document.getElementById(seatId);
  seat.style.backgroundColor = "#1DD100";
}
function setBgColorTotalSeat(seatId) {
  const seat = document.getElementById(seatId);
  seat.style.backgroundColor = "#d6b94e";
}
// add seat info
function setSeatInfo(name) {
  const container = document.getElementById("seatInfo");
  const ul = document.createElement("ul");
  ul.innerHTML = `<li>${name}</li><li>Economy</li><li>550</li>`;
  ul.classList.add("flex", "py-3", "justify-between");
  container.appendChild(ul);
}
// available seat calculation
function availableSeatCounter(id) {
  const seatsLeft = document.getElementById(id);
  const seatsLeftNumber = parseInt(seatsLeft.innerText);
  const availableSeat = seatsLeftNumber - 1;
  seatsLeft.innerText = availableSeat;
}
// total price calculation
function totalPrice(totalPriceId, grandTotalId, ticketPrice) {
  const price = document.getElementById(totalPriceId);
  const priceNumber = parseInt(price.innerText);
  const totalPrice = priceNumber + ticketPrice;
  price.innerText = totalPrice;
  const grandPrice = document.getElementById(grandTotalId);
  const grandPriceNumber = parseInt(grandPrice.innerText);
  const grandTotal = grandPriceNumber + ticketPrice;
  grandPrice.innerText = grandTotal;
}

// ----------discount calculation and other dynamic style function----------
function setDiscount(container) {
  const couponInput = document.getElementById("couponInput");
  const grandPrice = document.getElementById("grandTotal");
  const price = document.getElementById("totalPrice");
  const discountTotal = document.getElementById("discountPrice");
  const grandPriceNumber = parseInt(grandPrice.innerText);
  const priceNumber = parseInt(price.innerText);
  if (couponInput.value === "NEW15") {
    //set 20% discount
    const grandTotalDiscount = (priceNumber * 15) / 100;
    const grandTotal = grandPriceNumber - grandTotalDiscount;
    grandPrice.innerText = grandTotal;
    discountTotal.innerText = `Discount: BDT ${grandTotalDiscount}`;
    container.classList.add("hidden");
  } else if (couponInput.value === "Couple 20") {
    //set 20% discount
    const grandTotalDiscount = (priceNumber * 20) / 100;
    const grandTotal = grandPriceNumber - grandTotalDiscount;
    grandPrice.innerText = grandTotal;
    discountTotal.innerText = `Discount: BDT ${grandTotalDiscount}`;
    container.classList.add("hidden");
  } else {
    alert("invalid coupon");
  }
  couponInput.value = "";
}
// reset function
function resetPrice() {
  document.getElementById("grandTotal").innerText = 0;
  document.getElementById("totalPrice").innerText = 0;
  document.getElementById("discountPrice").innerText = "";
  document.getElementById("seatCount").innerText = 0;
  document.getElementById("couponContainer").classList.remove("hidden");
  document.getElementById("seatInfo").innerHTML = "";
}
// --------------Show modal-----------
function showModal() {
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");
  const modal = document.getElementById("modal");
  if (setCounter > 0 && phoneInput.value > 0) {
    phoneInput.value = "";
    nameInput.value = "";
    emailInput.value = "";
    modal.style.display = "block";
    resetPrice();
    document.getElementById("applyBtn").setAttribute("disabled", "disabled");
  } else {
    alert("Please select seats and enter your phone number");
  }
}
