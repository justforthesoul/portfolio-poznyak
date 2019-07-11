document.addEventListener("DOMContentLoaded", function(event) {
  const headerFix = document.querySelector(".header");

  window.addEventListener("scroll", function() {
    if (pageYOffset >= 50) {
      headerFix.classList.add("js-fixed");
      return false;
    } else {
      headerFix.classList.remove("js-fixed");
    }
  });
  
});
