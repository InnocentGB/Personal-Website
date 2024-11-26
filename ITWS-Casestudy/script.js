let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const now = new Date();
const manilaTime = now.toLocaleString("en-US", { timeZone: "Asia/Manila" });
const [date, time] = manilaTime.split(", ");
timeText.textContent = `${time} GMT+8`;

const yearText = document.getElementById("year");
const year = now.getFullYear();

yearText.textContent = year;