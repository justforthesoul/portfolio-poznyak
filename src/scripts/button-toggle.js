document.addEventListener("DOMContentLoaded", function(event) {
  const togglBtn = document.querySelector(".button-toggle__btn");
  const popapMenu = document.querySelector(".popap-menu");

  togglBtn.addEventListener("click", function() {
      togglBtn.classList.toggle("button-toggle__btn--active");
      popapMenu.classList.toggle("js-hidden");
      document.body.classList.toggle("js-overflow");
  });

  popapMenu.addEventListener("click", function(e) {
    if (e.target.classList.contains("main-menu__link")) {
      popapMenu.classList.toggle("js-hidden");
      togglBtn.classList.toggle("button-toggle__btn--active");
      document.body.classList.toggle("js-overflow");
    }
  });
});
