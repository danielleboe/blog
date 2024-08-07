// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

// Set default mode to dark
let mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function () {
  // Toggle between dark and light modes
  if (mode === "dark") {
    mode = "light";
    container.classList.add("light");
    container.classList.remove("dark");
  } else {
    mode = "dark";
    container.classList.add("dark");
    container.classList.remove("light");
  }
});
