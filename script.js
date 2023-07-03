const navBtns = document.querySelector(".nav__btns");
const navLinks = document.querySelector(".nav__links");
const closeNavBtn = document.querySelector(".close-nav-btn");
const openNavBtn = document.querySelector(".open-nav-btn");

openNavBtn.addEventListener("click", () => {
  navLinks.classList.add("show");
  closeNavBtn.style.display = "inline-block";
  openNavBtn.style.display = "none";
  document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
});

closeNavBtn.addEventListener("click", () => {
  navLinks.classList.remove("show");
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
  document.body.style.backgroundColor = "white";
});