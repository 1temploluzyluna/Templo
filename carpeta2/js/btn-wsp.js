let close = document.getElementById("btn-close");
let open = document.getElementById("btn-open");
let modal = document.getElementsByClassName("Modal")[0];
let modalContainer = document.getElementById("modal-container");
console.log("culea");

open.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

close.addEventListener("click", () => {
  modal.classList.toggle("modal-close");
  modalContainer.style.opacity = "0";
  modalContainer.style.visibility = "hidden";
});
