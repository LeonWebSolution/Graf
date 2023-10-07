const showModalButton = document.getElementById("apl-btn");
const modal = document.getElementById("application");
const closeModalButton = document.getElementById("closeModal");
const body = document.body;

showModalButton.addEventListener("click", function () {
    modal.style.display = "flex";
    body.style.overflow = "hidden";
});

closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
});