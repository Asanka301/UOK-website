let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  var currentUrl = window.location.href;

  // Select all navigation links
  var navLinks = document.querySelectorAll(".nav-link");

  // Loop through each link and check if it matches the current page URL
  navLinks.forEach(function (link) {
    if (link.href === currentUrl) {
      // Add the "active" class to the matching link
      link.classList.add("active");
    }

    // Add a click event listener to each link
    link.addEventListener("click", function () {
      // Remove the "active" class from all links
      navLinks.forEach(function (otherLink) {
        otherLink.classList.remove("active");
      });

      // Add the "active" class to the clicked link
      link.classList.add("active");
    });
  });
});
