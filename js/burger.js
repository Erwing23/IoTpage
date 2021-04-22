const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("slide");
hamburger.addEventListener("click",()=> {
  navUl.classList.toggle("show");
});