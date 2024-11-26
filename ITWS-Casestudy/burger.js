const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    console.log("goodmorning");
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});
