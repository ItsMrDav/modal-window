'use strict';
// Variable Declarations
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
console.log(btnsOpenModal);

// Function Declarations
const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};
const closeModal = () => {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
// Opening Modal
for (let btn of btnsOpenModal) {
  btn.addEventListener(`click`, openModal);
}
// Closing Modal
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);
// Closing Modal with ESC keyboard
document.addEventListener(`keydown`, function (e) {
  e.key === `Escape` && !modal.classList.contains(`hidden`) && closeModal();
});
