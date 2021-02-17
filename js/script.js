const list = document.querySelector("ul");
const burger = document.querySelector(".burger");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");

burger.addEventListener("click", function () {
    bars.classList.toggle("show")
    times.classList.toggle("show")
    list.classList.toggle("show")
});