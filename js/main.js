const imgManEl = document.querySelector(".img-man");
const imgWomanEl = document.querySelector(".img-woman");
const butManEl = document.querySelector(".but-man");
const butWomanEl = document.querySelector(".but-woman");

butManEl.addEventListener("click", () => {
  imgManEl.style.zIndex = "2";
  imgWomanEl.style.zIndex = "1";
});

butWomanEl.addEventListener("click", () => {
  imgManEl.style.zIndex = "1";
  imgWomanEl.style.zIndex = "2";
});
