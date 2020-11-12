var menuButton = document.getElementById("menu-button");
var mobileMenu = document.getElementsByClassName("mobile-menu");
var icon = document.getElementById("menu-icon");
menuButton.addEventListener("click", (event) => {
  console.log("reached");
  if (icon.innerHTML == "menu") {
    icon.innerHTML = "close";
  } else {
    icon.innerHTML = "menu";
  }
  mobileMenu.classList.add("hide-mobile");
});
