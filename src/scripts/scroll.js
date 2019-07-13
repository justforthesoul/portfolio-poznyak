document.addEventListener("DOMContentLoaded", function(event) {
  const headerFix = document.querySelector(".header");
  const anchors = document.querySelectorAll(".main-menu__link, .scroll__link");

  for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
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


  /*const mainMenu = document.querySelector(".main-menu");

  let curentSectionId = null;
  const navLinks = mainMenu.querySelectorAll(".main-menu__link");


  document.addEventListener("scroll", function() {
    const section = document.querySelectorAll("section");
    
    section.forEach(item => {
      const topPos = item.getBoundingClientRect().top;
      
      if (topPos >= -25 && topPos <= 25) {
        curentSectionId = item.id;
      }
    });

    getActive(curentSectionId);
  });

  function getActive(curentSectionId) {
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      link.classList.remove("main-menu__link--active");

      if (href === `#${curentSectionId}`) {
        link.classList.add("main-menu__link--active");
      }
    });
  }*/
});
