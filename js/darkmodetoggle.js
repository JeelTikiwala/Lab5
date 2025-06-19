const darkToggle = document.getElementById("darkToggle");
const lightToggle = document.getElementById("lightToggle");

darkToggle.addEventListener("click", function () {
  document.body.classList.add("bg-dark", "text-white");
});

lightToggle.addEventListener("click", function () {
  document.body.classList.remove("bg-dark", "text-white");
});
