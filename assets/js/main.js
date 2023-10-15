var menuBtn = document.querySelector(".menu-icon");
var mobileMenu = document.querySelector(".mobile-menu").style;

var x = false;
menuBtn.addEventListener("click", () => {
  if (x === false) {
    mobileMenu.height = "auto";
    mobileMenu.opacity = "1";
    mobileMenu.visibility = "visible";
    x = true;
  } else {
    mobileMenu.height = "0";
    mobileMenu.opacity = "0";
    mobileMenu.visibility = "hidden";
    x = false;
  }
});
