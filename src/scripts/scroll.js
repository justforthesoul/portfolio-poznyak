document.addEventListener("DOMContentLoaded", function(event) {
  const headerFix = document.querySelector(".header");
  const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute("href");
    
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

  window.addEventListener("scroll", function() {
    if (pageYOffset >= 50) {
      headerFix.classList.add("js-fixed");
    } else {
      headerFix.classList.remove("js-fixed");
    }
    
  });
});
