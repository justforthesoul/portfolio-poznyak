document.addEventListener("DOMContentLoaded", function(event) {
  let headerFix = document.querySelector(".header");
  window.addEventListener("scroll", function() {
    if (pageYOffset >= 50) {
      headerFix.classList.add("js-fixed");
      return false;
    } else {
      headerFix.classList.remove("js-fixed");
    }
  });
});
